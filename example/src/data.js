
export const CVData = {
    personalData: {
      name: 'Phan Truong Thanh',
      title: 'Data Engineer',
      image: 'https://media-exp1.licdn.com/dms/image/C5603AQFmA6-YcpFWCA/profile-displayphoto-shrink_400_400/0/1623139850601?e=1646870400&v=beta&t=QEVUUbgVprIeFZTp1kaJC_n_XiAKMHEy4866SsgPbxo',
      contacts: [
        { type: 'email', value: 'truongthanh.phan1996@gmail.com' },
        { type: 'phone', value: '##########' },
        { type: 'location', value: 'Ho Chi Minh city' },
        { type: 'website', value: '1m8.dev' },
        { type: 'linkedin', value: 'linkedin.com/in/truongthanhphan1996' },
        { type: 'github', value: 'github.com/truongthanh96' }
      ]
    },
    sections: [
      {
        type: 'text',
        title: 'Career Profile',
        content: 'Experienced in building Java Server using Spring. Understand Javascript strongly with good knowledge about nodejs, nwjs. Open mindset, hesitated about new technology, have passion in AR game.C++ and javascript is my favorite language.',
        icon: 'usertie'
      },
      {
        type: 'common-list',
        title: 'Education',
        icon: 'graduation',
        items: [
          {
            title: 'University of Information Technology - Ho Chi Minh National University',
            authority: 'University',
            authorityWebSite: 'https://www.uit.edu.vn/',
            rightSide: '2014 - 2018'
          }
        ]
      },
      {
        type: 'experiences-list',
        title: 'Experiences',
        // description: 'Optional',
        icon: 'archive',
        items: [
          {
            title: 'Data Engineer',
            company: 'Quod AI',
            description: 'Building pipeline to transform Git repositories into a searchable repositories with context',
            companyWebSite: 'http://quod.ai/',
            companyMeta: '',
            datesBetween: '2020.02 - Present'
          },
          {
            title: 'BigData Developer',
            company: 'VCCorp',
            description: 'Building personalized news recommender system for genk.vn, kenh14.vn, cafebiz.vn using Python, Apache Spark, Tensorflow, PyTorch',
            companyWebSite: 'https://vccorp.vn/',
            companyMeta: '',
            datesBetween: '2018.07 - 2020.01'
          },
          {
            title: 'UCC Contestant',
            company: 'Zalo - VNG',
            description: 'Creating a video sharing server which is able to serve million of users using Java, Redis, Kyoto Cabinet, RabbitMQ',
            companyWebSite: 'https://www.vng.com.vn/',
            companyMeta: '',
            datesBetween: '2017.06 - 2017.09'
          },
          {
            title: 'Developer',
            company: 'Brumob',
            description: 'Creating VNUF website and Game, both backend and frontend using Java and HTML, CSS, JS',
            companyWebSite: 'https://brumob.com',
            companyMeta: '',
            datesBetween: '2015.11 - 2017.02'
          }
        ]
      },
      // {
      //   type: 'projects-list',
      //   title: 'Projects',
      //   // description: 'Optional',
      //   icon: 'tasks',
      //   groups: [
      //     {
      //       sectionHeader: 'QuodAI',
      //       // description: 'Optional',
      //       items: [
      //         { title: 'Project', projectUrl: 'optional', description: 'Optional' },
      //       ]
      //     }
      //   ]
      // },
      {
        type: 'common-list',
        title: 'Conferences & Certificates',
        description: '',
        icon: 'comments',
        items: [
          {
            title: 'Software Engineer excellent degree / 2019',
            authority: 'UIT'
          },
          {
            title: 'GPA / 2019',
            rightSide: '8.43',
            authority: 'UIT'
          },
          {
            title: 'TOEIC / 2019',
            rightSide: '960',
          },
          {
            title: 'Genius Upskill Scholarship / 2019',
            authority: 'Vietnam Social Health Revolution (VSHR)'
          },
          {
            title: 'GameHackathon / 2017',
            rightSide: 'Consolation Prize',
            authority: 'UIT'
          },
          {
            title: 'Microsoft UIT Appstudio  / 2015',
            rightSide: 'First Prize',
            authority: 'Microsoft'
          }
        ]
      },
      {
        type: 'common-list',
        title: 'Languages',
        icon: 'language',
        items: [
          {
            authority: 'English',
            authorityMeta: 'Immediate'
          }
        ]
      },
      {
        type: 'tag-list',
        title: 'Skills Proficiency',
        icon: 'rocket',
        items: ['ETL', 'Java', 'Beam', 'SQL', 'Flink', 'ElasticSearch', 'Kubernetes']
      }
    ]
  }
