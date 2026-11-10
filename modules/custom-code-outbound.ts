import { ZuploRequest, ZuploContext } from "@zuplo/runtime";

export default async function(request: ZuploRequest, context: ZuploContext) {
  return Response.json({
    challenge_type: "1",
    message: "Success! This is Response Type 1",
    data: {
      skill: "Akamai Functions Integration",
      level: "Beginner"
    },
    timestamp: new Date().toISOString()
  });
}