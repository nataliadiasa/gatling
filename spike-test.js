import scenario from "./scenarios/create-user.js"

export const options = {
    stages: [
        { duration: '30s', target: 10 },
        { duration: '5s', target: 100 },
        { duration: '10s', target: 30 },
        { duration: '10s', target: 10 },
    ],
    thresholds: {
        checks: ['rate>0.8'],
        http_req_duration: ['p(95) < 300000'],
    }
}

export default scenario