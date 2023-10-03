import axios from 'axios';

type CounterResponse = {
  count: number;
};

export default class CounterAPI {
  url: string;

  constructor() {
    this.url = '/api/counter';
  }

  async increment() {
    const { data } = await axios.post<CounterResponse>(this.url, {
      operation: 'INC',
    });

    return data.count;
  }
}
