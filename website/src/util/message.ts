export default function sendMessage(message: string) {
  return fetch(
    atob(
      "aHR0cHM6Ly9ob29rcy5zbGFjay5jb20vc2VydmljZXMvVDdCOTlMQkRNL0IwMzEwRjYxVUNDLzdJclRyckFZcmNlbUxXTTZicjhtNUJFWQ=="
    ),
    {
      method: "POST",
      body: `{"text":"${message.replace(/"/g, '\\"')}"}`,
    }
  )
}
