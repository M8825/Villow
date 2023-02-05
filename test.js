await fetch("/api/session/" , { user: {
    method: "POST",
    body: JSON.stringify({username: "Mlkz", password:"123456"}),
    headers: { "Content-Type": "application/json" }}})
