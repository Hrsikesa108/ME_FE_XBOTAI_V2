import sample from "./aiData/sampleData.json";

export const QA_DATA = sample;

export const getAnswer = (question) => {
  const found = QA_DATA.find(
    (q) => q.question.toLowerCase() === question.toLowerCase()
  );
  return found
    ? found.response
    : "Sorry, Did not understand your query!";
};