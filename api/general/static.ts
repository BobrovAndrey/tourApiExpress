export function getStaticHome (env: string) {
  switch(env){
    case "developent": 
    return "http://localhost:8091//static"
    case "production":
    // CDN
  }
}

export function fileMapper(env: string): (filename: string) => string {
  return (filename) => getStaticHome(env) + filename
}