import axios from 'axios';

type PolishNotation = {
  polishExpression: string;
};

type GetPolishNotationResponse = {
  data: PolishNotation[];
};

async function getPolishNotationResponse() {
  try {
    // 👇️ const data: GetPolishNotationResponse 
    const { data, status } = await axios.get<GetPolishNotationResponse>(
      'localhost:3000',
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );

    console.log(JSON.stringify(data, null, 4));

    // 👇️ "response status is: 200"
    console.log('response status is: ', status);

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

getPolishNotationResponse();