workflow work {
  $scripts = @("cd backend; npm run dev", "cd frontend; npm run dev")
  foreach -parallel ($i in $scripts) { 
    iex $i
  }
}

work