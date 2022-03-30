import apiClient from "./http-common";

export function getAllQuestions() {
  return apiClient.get("/questions");
}
