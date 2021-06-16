import { Request, Response } from 'express'
import { Controller, HttpRequest } from '../../presentation/protocols'

export const adapterRoute = (controller: Controller) => {
  return async (request: Request, response: Response) => {
    const httpRequest: HttpRequest = {
      body: request.body
    }
    const httpResponse = await Promise.resolve(controller.handle(httpRequest))
    if (httpResponse.statusCode === 200) {
      response.status(httpResponse.statusCode).json(httpResponse)
    } else {
      response.status(httpResponse.statusCode).json({
        error: httpResponse.body.message
      })
    }
  }
}
