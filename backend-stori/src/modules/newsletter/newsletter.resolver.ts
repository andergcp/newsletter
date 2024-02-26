import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NewsletterUseCases } from './newsletter.use-case';
import { CreateNewsletterInput } from './dtos/newsletter-request.dto';
import { NewsletterResponse } from './dtos/newsletter-response.dto';

@Resolver()
export class NewsletterResolver {
  constructor(private newsletterUseCases: NewsletterUseCases) {}

  @Mutation(() => NewsletterResponse)
  async createNewsletter(
    @Args('createNewsletterInput') createNewsletterInput: CreateNewsletterInput,
  ): Promise<NewsletterResponse> {
    const entity = await this.newsletterUseCases.createNewsletter(
      createNewsletterInput,
    );
    return {
      id: entity.id,
      ...entity.props,
    };
  }

  @Query(() => [NewsletterResponse])
  async findNewsletters(): Promise<NewsletterResponse[]> {
    const entities = await this.newsletterUseCases.findAllNewsletters();
    return entities.map((entity) => ({
      id: entity.id,
      ...entity.props,
    }));
  }
}
