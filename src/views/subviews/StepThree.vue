<template></template>
<script>
export default {
  name: "StepThree",

  data() {
    return {
      date: "2021-01-02",
      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10),
    };
  },
  methods: {
    allowedDates: (val) => parseInt(val.split("-")[2], 10) % 2 === 0,
  },
};
</script>