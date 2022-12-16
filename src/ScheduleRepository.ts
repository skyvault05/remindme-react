import axios from "axios";

const rootUrl = "/api/v1/schedule";

export default class ScheduleRepository {
  async getMySchedules() {
    axios
      .get(rootUrl + "/getMySchedules")
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  async getSchedule(scheduleId: number) {
    await axios
      .get(rootUrl + "/getSchedule/" + scheduleId)
      .then((response) => {
        return response.data;
      })
      .catch((error) => console.log(error));
  }

  async getReplies(scheduleId: number) {
    await axios
      .get("/api/v1/scheduleReply/getScheduleReplies/" + scheduleId)
      .then()
      .catch((error) => console.log(error));
  }

  async storeSchedule() {
    await axios
      .post(rootUrl + "/storeSchedule")
      .then()
      .catch((error) => console.log(error));
  }

  async deleteSchedule(scheduleId: number) {
    await axios
      .delete(rootUrl + "/deleteSchedule/" + scheduleId)
      .then()
      .catch((error) => console.log(error));
  }
}
