<template>
  <div>
    <div v-for="article in articles.data" v-bind:key="article.id">
      <div class="assessment-title">
        <h1 class="title">{{ article.attributes.Title }}</h1>

        <p>Description:</p>
        <p>{{ article.attributes.Description }}</p>
      </div>
      <div class="assessment-content">
        <p>Rules</p>
        <p>{{ article.attributes.Rules }}</p>
        <p>Files required for the project</p>
        <br />
      </div>
      <div v-for="i in article.attributes.Files.data" v-bind:key="i.id">
        <div class="download-content">
          <p>Click here to download the files for the project</p>
          <div class="button-container">
            <a :href="`http://localhost:1337${i.attributes.url}`" download=""
              >Download</a
            >
          </div>
        </div>
        <div class="submission-container">
          <div class="sub-title">
          <h3>Submit your assignments down below once you've completed them.</h3>
          </div>
          <div class="drop-zone">
            <span class="drop-zone__prompt"
              >Drop file here or click to upload</span
            >
            <input type="file" name="myFile" class="drop-zone__input" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { assignmentQuery } from "../../graphql/assignmentQuery";
export default {
  data() {
    return {
      articles: {
        data: [],
      },
      api_url: process.env.strapiBaseUri,
    };
  },
  apollo: {
    articles: {
      prefetch: true,
      query: assignmentQuery,
      variables() {
        return { slug: this.$route.params.slug };
      },
    },
  },
  mounted() {
    document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
      const dropZoneElement = inputElement.closest(".drop-zone");

      dropZoneElement.addEventListener("click", (e) => {
        inputElement.click();
      });

      inputElement.addEventListener("change", (e) => {
        if (inputElement.files.length) {
          updateThumbnail(dropZoneElement, inputElement.files[0]);
        }
      });

      dropZoneElement.addEventListener("dragover", (e) => {
        e.preventDefault();
        dropZoneElement.classList.add("drop-zone--over");
      });

      ["dragleave", "dragend"].forEach((type) => {
        dropZoneElement.addEventListener(type, (e) => {
          dropZoneElement.classList.remove("drop-zone--over");
        });
      });

      dropZoneElement.addEventListener("drop", (e) => {
        e.preventDefault();

        if (e.dataTransfer.files.length) {
          inputElement.files = e.dataTransfer.files;
          updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
        }

        dropZoneElement.classList.remove("drop-zone--over");
      });
    });

    /**
     * Updates the thumbnail on a drop zone element.
     *
     * @param {HTMLElement} dropZoneElement
     * @param {File} file
     */
    function updateThumbnail(dropZoneElement, file) {
      let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");

      // First time - remove the prompt
      if (dropZoneElement.querySelector(".drop-zone__prompt")) {
        dropZoneElement.querySelector(".drop-zone__prompt").remove();
      }

      // First time - there is no thumbnail element, so lets create it
      if (!thumbnailElement) {
        thumbnailElement = document.createElement("div");
        thumbnailElement.classList.add("drop-zone__thumb");
        dropZoneElement.appendChild(thumbnailElement);
      }

      thumbnailElement.dataset.label = file.name;
      console.log(thumbnailElement.dataset.label)
      // Show thumbnail for image files
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
          thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
        };
      } else {
        thumbnailElement.style.backgroundImage = null;
      }
    }
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,800&display=swap");
div {
  font-family: "Montserrat", sans-serif;
}
.assessment-title {
  padding-top: 60px;
  padding-left: 60px;
}
h1.title {
  font-size: 24px;
}
.assessment-content {
  padding-top: 45px;
  padding-left: 60px;
}
.download-content {
  padding-top: 15px;
  padding-left: 60px;
}
.button-container {
  margin-top: 10px;
  padding: 15px 25px;
  background-color: #1666f7;
  width: fit-content;
  border: none;
  color: #fff;
  margin-bottom: 20px;
  border-radius: 5px;
}
.button-container a {
  color: #fff;
}
.submission-container {
  padding-left: 60px;
  padding-bottom: 45px;
}
.drop-zone {
  max-width: 50%;
  height: 200px;
  padding: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Quicksand", sans-serif;
  font-weight: 500;
  font-size: 20px;
  cursor: pointer;
  color: #cccccc;
  border: 4px dashed #009578;
  border-radius: 10px;
}

.drop-zone--over {
  border-style: solid;
}

.drop-zone__input {
  display: none;
}

.drop-zone__thumb {
  width: 100%;
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  background-color: #cccccc;
  background-size: cover;
  position: relative;
}
.sub-title {
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 50%;
  background-color: #e3f2fd;
  border: 1px solid #1666f7;
  border-radius: 5px;
  margin-bottom: 10px;
}

.drop-zone__thumb::after {
  content: attr(data-label);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 5px 0;
  color: #000;
  background: rgba(255, 255, 255, 0.75);
  font-size: 14px;
  text-align: center;
}
</style>
