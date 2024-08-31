import { executeQuery, ExecuteQueryOptions } from "@datocms/cda-client";
import { cache } from "react";

// Definição de tipos para os argumentos e opções da função
type PerformRequestArgs = [string, ExecuteQueryOptions];

const dedupedPerformRequest = cache(
  async (serializedArgs: string): Promise<any> => {
    const parsedArgs = JSON.parse(serializedArgs) as PerformRequestArgs;
    return executeQuery(...parsedArgs);
  }
);

export function performRequest(
  query: string,
  options: ExecuteQueryOptions
): Promise<any> {
  return dedupedPerformRequest(
    JSON.stringify([
      query,
      {
        ...options,
        token: process.env.NEXT_DATOCMS_API_TOKEN ?? "",
        environment: process.env.NEXT_DATOCMS_ENVIRONMENT ?? "",
      },
    ])
  );
}
