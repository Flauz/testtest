<template>
  <vue-dropzone
    ref="myVueDropzone"
    id="dropzone"
    :options="dropzoneOptions"
    @vdropzone-complete="afterComplete"
  >
  </vue-dropzone>
</template>

<script>
import vue2Dropzone from "vue2-dropzone";
import "vue2-dropzone/dist/vue2Dropzone.min.css";
export default {
  name: "Dropzone",
  components: {
    vueDropzone: vue2Dropzone,
  },
  data: function () {
    return {
      dropzoneOptions: {
        url: "https://httpbin.org/post",
        thumbnailWidth: 50,
        maxFilesize: 0.5,
        headers: { "My-Awesome-Header": "header value" },
      },
      fileUploaded: null,
    };
  },
  methods: {
    afterComplete(file) {
      this.fileUploaded = file;
    },
    testValue() {
      console.log("LALA", this.fileUploaded);
    },
  },
  watch: {
    fileUploaded: function () {
      this.$emit("addFile", this.fileUploaded);
    },
  },
};
</script>