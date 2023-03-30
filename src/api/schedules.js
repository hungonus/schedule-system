import { api } from "src/boot/axios";

export function getSystemSchedulesByPlanDates(systems, planDates) {
  return api({
    url: "/schedule",
    method: "get",
    data: {
      system: systems,
      plan_dates: planDates,
    },
  });
}

export function testApi() {
  return api({
    url: "/api/login",
    method: "get",
  });
}
