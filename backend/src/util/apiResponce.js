class apiResponce {
  constructor(statusCode, message = "success", data) {
    this.statusCode = statusCode<400;
    this.message = message;
    this.data = data;
    this.success = this.statusCode > 400;
  }
}

export default apiResponce;