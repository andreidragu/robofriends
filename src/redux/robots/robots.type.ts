export enum ERobotsActionType {
  FETCH_ROBOTS_START = 'FETCH_ROBOTS_START',
  FETCH_ROBOTS_SUCCESS = 'FETCH_ROBOTS_SUCCESS',
  FETCH_ROBOTS_FAILURE = 'FETCH_ROBOTS_FAILURE'
}

export interface IRobot {
  id: number;
  name: string;
  username: string;
  email: string;
}
