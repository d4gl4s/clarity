package com.backend;

import com.backend.models.*;
import com.backend.repository.BlockRepository;
import com.backend.repository.PostRepository;
import com.backend.repository.UserRepository;
import com.backend.services.PostService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}


	@Bean
	CommandLineRunner commandLineRunner(PostRepository postRepository, UserRepository userRepository, BlockRepository blockRepository){
		return args -> {
			User user1 =  new User("Otto", "Hemler", "kevin@gmail.com", "Hi, my name is Otto. I like to draw, sing and dance. I am currently studying Computer Science in Tartu.");
			User user2 =  new User("Mia", "Isabel", "mia@gmail.com", "Welcome to my page! My name is Mia. I am interested in photography.");

			Set<User> authors = new HashSet<>();
			authors.add(user1);
			authors.add(user2);

			userRepository.saveAll(authors);

			Block text1 = new Block("Artificial Intelligence (AI) has become an integral part of our everyday lives, revolutionizing the way we work, communicate, and make decisions. This technology, once confined to the realms of science fiction, has rapidly advanced and is now seamlessly integrated into various aspects of our daily routines.", 0L, BlockType.OPTION2);

			Block heading1 = new Block("Transforming Healthcare", 1L, BlockType.OPTION1);
			Block text2 = new Block("One of the most prominent areas where AI is making a significant impact is in healthcare. AI-powered diagnostic tools can analyze medical images, such as X-rays and MRIs, with remarkable precision. This not only speeds up the diagnosis process but also helps healthcare professionals identify diseases at earlier stages, potentially saving countless lives. ", 2L, BlockType.OPTION2);
			Link link = new Link("Check out todays forecast!", 3L, BlockType.OPTION3, "https://www.accuweather.com/en/ee/tartu/131136/weather-forecast/131136");
			Block text3 = new Block("Moreover, chatbots and virtual assistants are being used to provide medical information and advice, ensuring that patients have quick and easy access to healthcare resources.", 4L, BlockType.OPTION2);
			Reference ref1 = new Reference("",5L,BlockType.OPTION6, 1, "Weather-forecast", "Accuweather", "https://www.accuweather.com/en/ee/tartu/131136/weather-forecast/131136", 2023 );

			LineBreak lb = new LineBreak("", 6L, BlockType.OPTION7);
			Block text4 = new Block("Artificial Intelligence (AI) has become an integral part of our everyday lives, revolutionizing the way we work, communicate, and make decisions. This technology, once confined to the realms of science fiction, has rapidly advanced and is now seamlessly integrated into various aspects of our daily routines.", 7L, BlockType.OPTION2);

			Block heading2 = new Block("Enhancing Education", 8L, BlockType.OPTION1);
			Block text5 = new Block("AI is also transforming the field of education. Personalized learning platforms use AI algorithms to adapt to each student's individual pace and learning style. This approach helps students grasp concepts more effectively and provides teachers with valuable insights into their students' progress. Additionally, AI-driven chatbots are increasingly used to assist students with questions, homework, and even career guidance, making education more accessible and interactive.", 9L, BlockType.OPTION2);





			List<Block> content = new ArrayList<>();
			content.add(text1);
			content.add(text2);
			content.add(link);
			content.add(text3);
			content.add(ref1);
			content.add(text4);
			content.add(lb);
			content.add(text5);
			content.add(heading1);
			content.add(heading2);

			blockRepository.saveAll(content);

			Set<String> topics = new HashSet<>();
			topics.add("AI");
			topics.add("Machine Learning");
			topics.add("Futurism");
			topics.add("Tutorial");

			Post post1 = new Post("The Impact of Artificial Intelligence on Everyday Life", "Discover how Artificial Intelligence (AI) is reshaping our daily lives, from healthcare advancements to educational enhancements.", content, authors, topics, "Technology");


			postRepository.save(post1);
		};

	}
}
