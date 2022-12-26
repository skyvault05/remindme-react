import axios from "axios";

const rootUrl = "/api/v1/schedule";
export interface SchedulesProperty {
  createDate: Date;
  description: string;
  duration: string;
  endDate: Date;
  id: number;
  intervalType: string;
  intervalValue: number;
  members: [];
  modifiedDate: Date;
  scheduleReplies: [];
  startDate: Date;
  status: number;
  thumbnail: string;
  title: string;
  user: object;
}

export default class ScheduleRepository {
  async getMySchedules() {
    axios
      .get(rootUrl + "/getMySchedules")
      .then((response) => {
        return response.data;
      })
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
      .post(rootUrl + "/storeSchedule", {})
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
