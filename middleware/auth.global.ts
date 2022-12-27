export default defineNuxtRouteMiddleware((to, from) => {
  const url = "https://ynufes-mypage.shion.pro/api/v1/user/info";
  const authToken = useRequestHeaders(["authorization"]);

  if (typeof authToken !== "string") return abortNavigation();
  // const authToken = "";
  const headers = new Headers({
    Authorization: authToken,
  });

  const { data, error } = useFetch(url, {
    method: "GET",
    headers: headers,
  });
  if (!data || error) {
    navigateTo("login");
  }

  // もし、"INVALID Authorization Header"なら、loginページに返す。
  // それ以外は何もしない
});
