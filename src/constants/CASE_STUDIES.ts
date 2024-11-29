import type { CaseStudy } from 'src/types/CaseStudy.d.ts';

export const CASE_STUDIES = [
  {
    caseStudyName: `Upzy`,
    companyDescription: `Second hand children’s clothing web app`,
    previewCaption: `A responsive web app for a second hand kids clothes web shop.`,
    texts: {
      goalText: `Design a straightforward, responsive e-commerce platform for second-hand children's clothing, offering affordable and high-quality items. The platform will also include an option for users to donate clothes, addressing the issue of clutter while promoting sustainability.`,
      problemText: `Finding affordable children's clothing with minimal time and effort is a challenge for many parents. Additionally, the accumulation of outgrown clothes creates clutter in their homes, as they often don’t know what to do with these items.`,
      userText: `For this project, I conducted user research by developing a user persona and creating a user journey map. By trying to understand the perspective of parents, I aimed to better understand their needs when shopping for second-hand children's clothing. Initially, I assumed that price would be their primary concern, but after some research I found that ease of navigation and trust in product quality were equally important. This research helped shape the design to focus on simplicity, transparency, and functionality, ensuring a smooth and reliable shopping experience.`,
      takeawaysText: `The design focused on creating a user-friendly experience. Feedback highlighted how the clean layout and intuitive navigation would make it easier for users to browse and purchase items. One person noted, "The simple filtering options make it easy to find exactly what you're looking for, which is great for busy parents." Throughout this project, I learned how essential it is to prioritize the needs of the user in every aspect of design. I also gained a deeper understanding of how accessibility features enhance the overall experience. This project helped me refine my skills in designing for e-commerce, balancing functionality with aesthetics to meet user expectations.`,
    },
    images: {
      highFidelityPrototype: {
        desktop: `/high_fidelity_prototype_desktop_upzy.gif`,
        mobile: `/high_fidelity_prototype_mobile_upzy.gif`,
      },
      lowFidelityPrototype: {
        desktop: `/low_fidelity_prototype_desktop_upzy.gif`,
        mobile: `/low_fidelity_prototype_mobile_upzy.gif`,
      },
      preview: `/preview_upzy.png`,
      user: {
        persona: `/persona_upzy.png`,
        journey: `/journey_upzy.png`,
      },
      wireframe: {
        desktop: `/wireframe_desktop_upzy.jpg`,
        mobile: `/wireframe_mobile_upzy.jpg`,
      },
    },
  },
  {
    caseStudyName: `BotaniCare`,
    companyDescription: `Plant care app`,
    previewCaption: `An all in one plant care app for plant owners, to help them plan care routines, solve plant health issues and connect with other plant enthusiasts.`,
    texts: {
      goalText: `Design a user-friendly, all-in-one plant care app that helps plant owners with personalized care routines, quick solutions for plant health issues, and easy plant identification. The app will also foster a community where users can connect with fellow plant enthusiasts for advice and support, streamlining the plant care process from start to finish.`,
      problemText: `Plant owners often feel overwhelmed by plant care, struggling to find reliable information and lacking confidence in their abilities. Existing apps and websites are often cluttered or only focus on specific aspects like watering schedules or pest control. This forces users to rely on multiple sources, adding to their frustration and making plant care more complex than necessary.`,
      userText: `The research focused on identifying and understanding the primary challenges plant owners face when caring for their plants. To gain a comprehensive view, a competitive analysis of existing products was conducted to evaluate their features, highlighting both strengths and limitations. Personas and user journeys were developed to delve into user behaviors, motivations, and needs. These insights were integrated into designs aimed at addressing core user pain points. The final product emphasizes essential features while maintaining a minimalist design, enhancing user experience and ensuring easy navigation.`,
      takeawaysText: `All participants in the usability study described the design as clean and minimalist. They also found the app easy to navigate and use. Throughout this process, I gained valuable insights and am pleased with the final result, as it successfully meets its initial goals. I learned the importance of user research and was able to refine my communication during the usability study. This project also underscored the value of iterating on different ideas to better meet users’ needs.`,
    },
    images: {
      highFidelityPrototype: {
        desktop: ``,
        mobile: `/high_fidelity_prototype_mobile_BotaniCare.gif`,
      },
      lowFidelityPrototype: {
        desktop: ``,
        mobile: `/low_fidelity_prototype_mobile_BotaniCare.gif`,
      },
      preview: `/preview_BotaniCare.png`,
      user: {
        persona: `/persona_BotaniCare.png`,
        journey: `/journey_BotaniCare.png`,
      },
      wireframe: {
        desktop: ``,
        mobile: `/wireframe_mobile_BotaniCare.jpg`,
      },
    },
  },
  {
    caseStudyName: `citySage`,
    companyDescription: `Event finder`,
    previewCaption: `An app and responsive website to help users find free or low-cost cultural activities in cities, promoting accessibility and engagement.`,
    texts: {
      goalText: `Design a responsive web app where users can easily find low cost or free cultural events in their city.`,
      problemText: `Finding affordable or free cultural events is difficult for a lot of people. Making it difficult for many to find friends and community.`,
      userText: `I created user personas, representing users who seek affordable and accessible cultural events. I identified key pain points, including difficulty finding accessible options, social isolation due to limited participation, and the high cost of many events. Assumptions that users struggle with event discovery and accessibility were confirmed, emphasizing the need for better filtering, clear accessibility information, and affordable options. These insights will guide the design of a more user-friendly platform.`,
      takeawaysText: `The main goal of this design was to create an accessible and user-friendly experience. Based on user feedback, I believe this goal was successfully achieved. This solution has the potential to empower diverse users by helping them discover events that align with their interests and budgets, fostering community engagement and inclusivity. My research on accessibility considerations for live events and venues provided valuable insights. This process deepened my understanding of designing for inclusivity and the importance of removing barriers to create equitable experiences for all users.`,
    },
    images: {
      highFidelityPrototype: {
        desktop: `/high_fidelity_prototype_desktop_citySage.gif`,
        mobile: `/high_fidelity_prototype_mobile_citySage.gif`,
      },
      lowFidelityPrototype: {
        desktop: `/low_fidelity_prototype_desktop_citySage.gif`,
        mobile: `/low_fidelity_prototype_mobile_citySage.gif`,
      },
      preview: `/preview_citySage.png`,
      user: {
        persona: `/persona_citySage.png`,
        journey: `/journey_citySage.png`,
      },
      wireframe: {
        desktop: `/wireframe_desktop_citySage.jpg`,
        mobile: `/wireframe_mobile_citySage.jpg`,
      },
    },
  },
] as const satisfies readonly CaseStudy[];
