const stdRead = (onData, end) => {
  process.stdin.setEncoding('utf-8');

  const stdReadId = setInterval(() => {
    const data = parseInt(process.stdin.read());

    if(data) {
      end(onData(data));
      clearInterval(stdReadId);
    }
  }, 300);
}

exports.stdRead = stdRead;