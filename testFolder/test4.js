let candidate = {
  minSalary: 120000
}

let job = {
  maxSalary: undefined
}

function match(candidate, job) {
  // is this job a valid match for the candidate?
  
  if (isNaN(candidate.minSalary) || isNaN(job.maxSalary) === true) {
    console.log("error")
  }
  else if ((candidate.minSalary - (candidate.minSalary*0.1)) <= job.maxSalary) {

    return true
  } else return false
}

console.log(match(candidate, job))

