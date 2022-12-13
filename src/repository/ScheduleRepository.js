import axios from "axios";

export default class ScheduleRepository {
  async getMySchedules() {
    const url = "/api/v1/schedule/getMySchedules";
    let response = await axios
      .get(url)
      .then(function (response) {
        console.log("response", response);
      })
      .catch((e) => console.error(e));
    console.log(response);
    return response.data;
  }
  async getSchedule(scheduleId) {
    const url = "/api/v1/schedule/getSchedule/" + scheduleId;
    let response = await axios.get(url);
    return response.data;
  }
  async getReplies(scheduleId) {
    const url = "/api/v1/scheduleReply/getScheduleReplies/" + scheduleId;
    let response = await axios.get(url);
    return response.data;
  }
}
