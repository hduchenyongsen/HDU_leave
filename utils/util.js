const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  if(hour>12)
  {
    var a=hour-12
    return month + "月" + day + "日 " + a + ":" + [minute, second].map(formatNumber).join(':') +" PM"
  }
  else
  {
    return month + "月" + day + "日 " + [hour, minute, second].map(formatNumber).join(':') + " AM"
  }
  }

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const currentTime = date => {
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  if (hour > 12) {
    return hour - 12 + ":" + [minute, second].map(formatNumber).join(':') + " PM"
  }
  else {
    return hour + ":" + [minute, second].map(formatNumber).join(':') + " AM"
  }
}

const current_date = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  return year+'/'+month+'/'+day
}



module.exports = {
  formatTime: formatTime,
  currentTime:currentTime,
  current_date
}
