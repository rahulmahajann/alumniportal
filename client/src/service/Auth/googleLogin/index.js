export default async function loginWithGoogle() {
  console.log("hahaha");
  const GOOGLE_CLIENT_ID =
    "32572626356-ottl9bfpft73tsehd9lrc42gfuflt70m.apps.googleusercontent.com";

  const loadAuth2Library = new Promise((resolve, reject) => {
    window.gapi.load("auth2", () => {
      resolve();
    });
  });
  await loadAuth2Library;
  window.gapi.auth2.init({
    client_id: GOOGLE_CLIENT_ID,
    scope: "profile",
    plugin_name: "alumni",
  });
  const authInstance = window.gapi.auth2.getAuthInstance();
  const user = await authInstance.signIn();
  const profile = authInstance.currentUser.get().getBasicProfile();
  const authResponse = user.getAuthResponse(true);

  return {
    payload: {
      socialMediaId: profile.getId(),
      userName: profile.getName(),
      userEmail: profile.getEmail(),
      userAvatar: profile.getImageUrl(),
      accessToken: authResponse["id_token"],
    },
  };
}
