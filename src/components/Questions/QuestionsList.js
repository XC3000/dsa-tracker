import React from "react";
import { useQuery } from "react-query";
import { ListItem, OrderedList, CircularProgress } from "@chakra-ui/react";
import { getAllQuestions } from "../../services/QuestionService";

const QuestionsList = () => {
  const {
    isLoading,
    data: questionList,
    error,
  } = useQuery("questions", getAllQuestions);

  if (isLoading) {
    return <CircularProgress isIndeterminate color="green.300" />;
  }

  if (error) {
    return <p>error</p>;
  }

  //   console.log(data.data.results[0].questions);

  return (
    <OrderedList>
      {questionList.data.results[0].questions.map((item, index) => (
        <ListItem key={index}>{item.Problem}</ListItem>
      ))}
    </OrderedList>
  );
};

export default QuestionsList;
