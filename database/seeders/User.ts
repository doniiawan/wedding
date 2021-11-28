import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class UserSeeder extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    await User.createMany([
      {
        uid: 'rudianzah',
        name: 'Rudianzah',
        session: true
      },
      {
        uid: 'maman-surachman',
        name: 'Maman Surachman',
        session: true
      },
      {
        uid: 'agus-atang',
        name: 'Agus Atang Wibowo',
        session: true
      },
      {
        uid: 'abdul-latief',
        name: 'Abdul Latief',
        session: true
      },
      {
        uid: 'chandra-suspara',
        name: 'Chandra Suspara Iswayudi',
        session: true
      },
      {
        uid: 'david-abdillah',
        name: 'David Abdillah Fahmi',
        session: true
      },
      {
        uid: 'teti-herawati',
        name: 'Teti Herawati',
        session: true
      },
      {
        uid: 'istikhanah',
        name: 'Istikhanah',
        session: false
      },
      {
        uid: 'yenny-nur',
        name: 'Yenny Nur Azizah',
        session: false
      },
      // TAMUNE VARRA
      // SESI 1
      {
        uid: 'yolanda-faradilla',
        name: 'Yolanda Faradilla',
        session: true
      },
      {
        uid: 'linda',
        name: 'Linda',
        session: true
      },
      {
        uid: 'ayu-kusuma',
        name: 'Ayu',
        session: true
      },
      {
        uid: 'ariffiana-kusuma',
        name: 'Ariffiana Kusuma Dewi',
        session: true
      },
      {
        uid: 'indah-tartila',
        name: 'Indah Tartila',
        session: true
      },
      {
        uid: 'anisa-h',
        name: 'Anisa H',
        session: true
      },
      // SESI 2
      {
        uid: 'neny-f',
        name: 'Neny Fitria',
        session: false
      },
      {
        uid: 'yan-tamara',
        name: 'Yan Tamara',
        session: false
      },{
        uid: 'puspa',
        name: 'Puspa Zanuar',
        session: false
      },{
        uid: 'fanti',
        name: 'Fanti Z',
        session: false
      },{
        uid: 'dicky',
        name: 'M. Dicky',
        session: false
      },{
        uid: 'galuh',
        name: 'Galuh Ayu',
        session: false
      },{
        uid: 'ira',
        name: 'Ira N',
        session: false
      },{
        uid: 'meta',
        name: 'Meta Aprilia',
        session: false
      },{
        uid: 'devita',
        name: 'Devita Putri',
        session: false
      },{
        uid: 'ucik',
        name: 'Astri W',
        session: false
      },{
        uid: 'novida',
        name: 'Novida Damayanti',
        session: false
      },{
        uid: 'narulita',
        name: 'Narulita Dwi P',
        session: false
      },{
        uid: 'nurul-amaliya',
        name: 'Nurul Amaliya',
        session: false
      },{
        uid: 'kiki-ayu',
        name: 'Kiki Ayu',
        session: false
      },{
        uid: 'khadifa-dwi',
        name: 'Khadifa Dwi',
        session: false
      },{
        uid: 'mina',
        name: 'Mina Gusnita',
        session: false
      },{
        uid: 'salma',
        name: 'Salma Lutfia',
        session: false
      },{
        uid: 'ika-lupitasari',
        name: 'Ika Lupitasari',
        session: false
      },{
        uid: 'laras',
        name: 'Laras',
        session: false
      },{
        uid: 'adinda-henny',
        name: 'Adinda Henny',
        session: false
      },{
        uid: 'nisa',
        name: 'Nisa',
        session: false
      },
      // KONCOKU
      {
        uid: 'adit',
        name: 'Adit Sugianto',
        session: false
      },
      {
        uid: 'fandy',
        name: 'Fandy B',
        session: false
      },
      {
        uid: 'edwin',
        name: 'Edwin M K',
        session: false
      },
      {
        uid: 'kiki-doto',
        name: 'Kiki Adrian',
        session: false
      },
      {
        uid: 'annas',
        name: 'Annas',
        session: false
      },
      {
        uid: 'awed',
        name: 'Awed',
        session: false
      },
      {
        uid: 'emank-tunk',
        name: 'Firmansyah',
        session: false
      },
      {
        uid: 'bram',
        name: 'Brambang',
        session: false
      },
      {
        uid: 'cahyo',
        name: 'Cahyo K',
        session: false
      },
      {
        uid: 'mulki',
        name: 'Mulki',
        session: false
      },
      {
        uid: 'ardi-n',
        name: 'Ardi N',
        session: false
      },
      {
        uid: 'ghulam',
        name: 'Ghulam',
        session: false
      },
      {
        uid: 'huda',
        name: 'Huda',
        session: false
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
