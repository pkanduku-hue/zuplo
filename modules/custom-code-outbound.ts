import { ZuploRequest, ZuploContext } from "@zuplo/runtime";

export default async function(request: ZuploRequest, context: ZuploContext) {
return {
status: 200,
headers: {
"Content-Type": "application/json"
},
body: {
challenge_type: "2",
message: "Success! This is Response Type 2",
data: {
skill: "Advanced Header Routing",
level: "Advanced"
},
timestamp: new Date().toISOString()
}
};
}