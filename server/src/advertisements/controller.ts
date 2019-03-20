import { JsonController, Get, Param, Put, Body, 
  Post, HttpCode, NotFoundError } from 'routing-controllers'
import Advertisement from './entity'


@JsonController()
export default class AdController {

@Get('/advertisements/:id')
getAd(
  @Param('id') id: number
) {
  return Advertisement.findOne(id)
};

@Get('/advertisements')
async allAds () {
  const advertisements = await Advertisement.find()
  return {advertisements}

};

@Put('/advertisements/:id')
async updateAds(
  @Param('id') id: number,
  @Body() update: Partial<Advertisement>
) {
  // console.log(`Incoming PUT body param:`, update)
  const advertisement = await Advertisement.findOne(id)
  if (!advertisement) throw new NotFoundError('Cannot find advertisement')

  return Advertisement.merge(advertisement, update).save()
};

@Post('/advertisements')
@HttpCode(201)
createAds(
  @Body() advertisement: Advertisement
) {
  // console.log(`Incoming POST body param:`, advertisement)
  return advertisement.save()
};
}