export const useIsLoggedIn = async () => {
  const url = "https://ynufes-mypage.shion.pro/api/v1/user/info";
  // const authToken = useRequestHeaders(["authorization"]);
  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2NzIzNzY2MTUsImp0aSI6ImU3OGNzdWJ1ZnF3dyIsImlhdCI6MTY3MjI5MDIxNSwiaXNzIjoieW51ZmVzLW15cGFnZS5zaGlvbi5wcm8ifQ.W8XkXXE83T0DVGckY0IYZaBnY9vzOG5Cnb67chepr34";

  if (typeof authToken !== "string")
    console.log(
      "トークンがstring型出ないため事前にログインユーザでないと判定しました。"
    );
  if (typeof authToken !== "string") return false;

  const headers = new Headers({
    Authorization: `Bearer ${authToken}`,
  });

  const { data, error }: any = await useFetch(url, {
    method: "GET",
    headers: headers,
  });

  if (!error || !data)
    console.log("バックエンドAPIから情報を得られませんでした。");
  if (!error || !data) return false;

  if (error.value) console.log("fetch関数が正常に動作していません。");
  if (error.value) return false;

  if (data?.error === "INVALID Authorization Header")
    console.log("不適切なトークンです。");
  if (data?.error === "INVALID Authorization Header") return false;

  console.log("適切なトークンです。ログインユーザと判定します。");
  return true;
};

// {"name_first":"","name_last":"","type":0,"profile_icon_url":"https://profile.line-scdn.net/0hEzrTM20AGlVfLQycG1pkKi99GT98XENHdk1WM216RTEwH1lXJBlXM2ovRWc3Tw9TJEhSYTkoE21TPm0zQXvmYVgdRGJmG1oAdkJQtQ","status":0}
