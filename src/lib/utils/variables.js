class EnvironmentVariable {
  static instance = new EnvironmentVariable()
  static PROJECT = import.meta.env.VITE_PROJECT
  static PROJECT_NAME = import.meta.env.VITE_PROJECT_NAME
  static API_URL = import.meta.env.VITE_API_URL

  static getInstance () {
    return this.instance
  }

  getProject () {
    return EnvironmentVariable.PROJECT
  }

  getProjectName () {
    return EnvironmentVariable.PROJECT_NAME
  }

  getApiUrl() {
		return EnvironmentVariable.API_URL;
	}
}

export const variables = EnvironmentVariable.getInstance()
