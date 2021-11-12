import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        uid: '2d29a812-28f5-4538-9705-b9f60a8b8fb6',
        name: 'Fandy',
      },
      {
        uid: '2d29a812-28f5-4538-9705-b9f60a8b8fb6',
        name: 'Gus Firmansyah'
      },
      {
        uid: 'a180c6cf-f3f0-4f95-b391-ad5076ea2404',
        name: 'Edwin M K'
      }
    ])

  }
}


// c0c7363a-4337-4344-a481-001642d9d953

// f2090acf-2320-4946-aea5-420e52ef1ffe

// 43cae828-523c-4737-8633-10d69a7d24cf

// f7c57a16-fad3-4a5f-8b42-2a703441a16c

// 048551bd-6905-4158-9a83-c776d914fbc1

// e8a8df0e-8cb6-40a0-b8ee-f809157dee89

// c73f6a02-11e8-4ba9-8ede-7140d3ace258

// a01768d3-5a7f-496a-bd7d-d54413d3cec5

// 7f22e4ee-c577-4d8d-836c-dd2c35ccb3d3

// 50ec5f40-d10e-4390-aa0e-9912a38f4385

// 15547539-2597-4916-ba86-4e07b6afb59f

// 8536c703-a171-458f-b143-086032592af4

// 41aae467-f2bf-4ea1-a267-17c0611803e9

// 8d47b59f-a983-44ee-a901-94adabc50d69

// 11cc7e55-203f-47d3-bd51-5b18a366a981

// b961013e-7561-4a49-b357-f9de6f045914

// 36ff2754-1623-4e64-b589-fa4c53d2c8b9

// 36865f28-b177-4760-a124-66f535e0a8c2
