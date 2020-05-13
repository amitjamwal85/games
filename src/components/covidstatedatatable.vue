<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12">
        <div v-if="isloaded" class="section-title-covid">
          <div class="cata-covid-confirmed">
            <span>Confirmed</span><br />
            <span>[{{ get_covid_header[0].deltaconfirmed }}]</span><br />
            <span>{{ get_covid_header[0].confirmed }}</span>
          </div>
          <div class="cata-covid-active">
            <span>Active</span><br />
            <span>-</span><br />
            <span>{{ get_covid_header[0].active }}</span>
          </div>
          <div class="cata-covid-recovered">
            <span>Recovered</span><br />
            <span>[{{ get_covid_header[0].deltarecovered }}]</span><br />
            <span>{{ get_covid_header[0].recovered }}</span>
          </div>
          <div class="cata-covid-death">
            <span>Deaths</span><br />
            <span>[{{ get_covid_header[0].deltadeaths }}]</span><br />
            <span>{{ get_covid_header[0].deaths }}</span>
          </div>
        </div>
      </div>

      <div class="col-sm-12">
        <div class="table-responsive">
          <div class="table-div-width">
            <table
              id="datatable_covid"
              class="table table-striped table-bordered"
              style="width:100%"
            >
              <thead>
                <tr>
                  <th>State</th>
                  <th>Confirmed</th>
                  <th>Active</th>
                  <th>Deaths</th>
                  <th>Recovered</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in get_covid_data" v-bind:key="index">
                  <th>{{ data.state }}</th>
                  <th>
                    {{ data.confirmed }}
                    <span
                      class="deltaconfirmed"
                      v-if="data.deltaconfirmed > 0"
                      >{{ data.deltaconfirmed }}</span
                    >
                  </th>
                  <th>{{ data.active }}</th>
                  <th>
                    {{ data.deaths }}
                    <span class="deltaconfirmed" v-if="data.deltadeaths > 0">{{
                      data.deltadeaths
                    }}</span>
                  </th>
                  <th>
                    {{ data.recovered }}
                    <span
                      class="deltarecovered"
                      v-if="data.deltarecovered > 0"
                      >{{ data.deltarecovered }}</span
                    >
                  </th>
                  <th>{{ data.lastupdatedtime | dateFormatCustom }}</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { GET_COVID_DATA } from "../store/action.type";
import { mapGetters } from "vuex";
import store from "../store";
import MixInFilter from "../mixin/filter";

export default {
  name: "covidstatewise",
  mixins: [MixInFilter],
  data() {
    return {
      isloaded: false
    };
  },
  computed: {
    ...mapGetters(["get_covid_data", "get_covid_header"])
  },
  mounted() {
    Promise.all([store.dispatch(GET_COVID_DATA)])
      .then(() => {
        // console.log("covid promise data:", data);
        $("#datatable_covid").DataTable({
          fixedHeader: {
            header: true
          },
          searching: ["State"],
          paging: false,
          ordering: false,
          info: false
        });
        this.isloaded = true;
      })
      .catch(error => {
        console.log("covid promise error:", error);
      });

    /*this.axios.get("https://api.covid19india.org/data.json").then(res => {
      this.tableData = res.data.statewise.splice(1);
      this.total_row = res.data.statewise.slice(0);
      this.isloaded = true;

    });*/
  }
};
</script>

<style scoped>
.table-div-width {
  width: 60%;
  margin: auto;
}

table.dataTable thead tr {
  background-color: #325c64;
  font-size: 12px;
  color: #fcffe8;
}

table.dataTable tbody tr {
  font-size: 12px;
}

.deltaconfirmed {
  font-size: 10px;
  color: #ff1a10;
}

.deltarecovered {
  font-size: 10px;
  color: #12b125;
}

.section-title-covid {
  margin-top: 5px;
  text-align: center;
  margin-bottom: 5px;
}

.cata-covid-recovered {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #4eb848;
  padding: 6px 25px;
  margin-left: 5px;
}

.cata-covid-active {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #2f41b8;
  padding: 6px 25px;
  margin-left: 5px;
}

.cata-covid-confirmed {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #ed5351;
  padding: 6px 25px;
  margin-left: 5px;
}

.cata-covid-death {
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  color: #131313;
  padding: 6px 25px;
  margin-left: 5px;
}
</style>
