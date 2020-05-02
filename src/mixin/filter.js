import moment from "moment";

export default {
  filters: {
    makeUpperCase(value) {
      return value.toUpperCase();
    },

    dateFormatCustom(value) {
        const  format_date = moment(value, "DD/MM/YYYY HH:mm:ss").format('DD/MMM/YYYY HH:mm');
        return format_date;
    }
  }
};
