workflow work {
  $scripts = @("cd backend; npm run dev", "cd frontend; npm run build", "cd frontend/dist; caddy file-server")
  foreach -parallel ($i in $scripts) { 
    iex $i
  }
}

work