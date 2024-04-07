export type Submission = {
  key: string;
  payload: {
    problemId: string;
    code: string;
    testcase: string;
    userId: string;
    language: string;
  };
};
