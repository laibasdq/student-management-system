const students = [
  {
    id: 1,
    name: "Ahmed Khan",
    email: "ahmed@example.com",
    phone: "03001234567",
    class: "BS IT",
    age: 21,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: 2,
    name: "Ali Raza",
    email: "ali@example.com",
    phone: "03011234567",
    class: "BS CS",
    age: 22,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=2",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    email: "sara@example.com",
    phone: "03021234567",
    class: "BS IT",
    age: 20,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 4,
    name: "Hassan Malik",
    email: "hassan@example.com",
    phone: "03031234567",
    class: "BS SE",
    age: 23,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=4",
  },
  {
    id: 5,
    name: "Ayesha Noor",
    email: "ayesha@example.com",
    phone: "03041234567",
    class: "BS IT",
    age: 21,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 6,
    name: "Usman Tariq",
    email: "usman@example.com",
    phone: "03051234567",
    class: "BS CS",
    age: 22,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=6",
  },
  {
    id: 7,
    name: "Fatima Zahra",
    email: "fatima@example.com",
    phone: "03061234567",
    class: "BS IT",
    age: 20,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=7",
  },
  {
    id: 8,
    name: "Hamza Ali",
    email: "hamza@example.com",
    phone: "03071234567",
    class: "BS SE",
    age: 24,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 9,
    name: "Maham Khan",
    email: "maham@example.com",
    phone: "03081234567",
    class: "BS IT",
    age: 21,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=9",
  },
  {
    id: 10,
    name: "Bilal Ahmed",
    email: "bilal@example.com",
    phone: "03091234567",
    class: "BS CS",
    age: 23,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=10",
  },

  // 11
  {
    id: 11,
    name: "Hira Shah",
    email: "hira@example.com",
    phone: "03101234567",
    class: "BS IT",
    age: 20,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=11",
  },

  // 12
  {
    id: 12,
    name: "Zain Malik",
    email: "zain@example.com",
    phone: "03111234567",
    class: "BS SE",
    age: 22,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=12",
  },

  // 13
  {
    id: 13,
    name: "Maryam Ali",
    email: "maryam@example.com",
    phone: "03121234567",
    class: "BS CS",
    age: 21,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=13",
  },

  // 14
  {
    id: 14,
    name: "Danish Khan",
    email: "danish@example.com",
    phone: "03131234567",
    class: "BS IT",
    age: 24,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=14",
  },

  // 15
  {
    id: 15,
    name: "Iqra Noor",
    email: "iqra@example.com",
    phone: "03141234567",
    class: "BS IT",
    age: 20,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=15",
  },

  // 16
  {
    id: 16,
    name: "Saad Ahmed",
    email: "saad@example.com",
    phone: "03151234567",
    class: "BS CS",
    age: 22,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=16",
  },

  // 17
  {
    id: 17,
    name: "Anaya Khan",
    email: "anaya@example.com",
    phone: "03161234567",
    class: "BS SE",
    age: 21,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=17",
  },

  // 18
  {
    id: 18,
    name: "Rayan Ali",
    email: "rayan@example.com",
    phone: "03171234567",
    class: "BS IT",
    age: 23,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=18",
  },

  // 19
  {
    id: 19,
    name: "Zoya Ahmed",
    email: "zoya@example.com",
    phone: "03181234567",
    class: "BS CS",
    age: 20,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=19",
  },

  // 20
  {
    id: 20,
    name: "Arham Khan",
    email: "arham@example.com",
    phone: "03191234567",
    class: "BS IT",
    age: 22,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=20",
  },

  // 21
  {
    id: 21,
    name: "Laiba Ahmed",
    email: "laiba@example.com",
    phone: "03201234567",
    class: "BS IT",
    age: 21,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=21",
  },

  // 22
  {
    id: 22,
    name: "Usama Raza",
    email: "usama@example.com",
    phone: "03211234567",
    class: "BS SE",
    age: 23,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=22",
  },

  // 23
  {
    id: 23,
    name: "Eman Fatima",
    email: "eman@example.com",
    phone: "03221234567",
    class: "BS CS",
    age: 20,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=23",
  },

  // 24
  {
    id: 24,
    name: "Shahzaib Khan",
    email: "shahzaib@example.com",
    phone: "03231234567",
    class: "BS IT",
    age: 24,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=24",
  },

  // 25
  {
    id: 25,
    name: "Sana Malik",
    email: "sana@example.com",
    phone: "03241234567",
    class: "BS IT",
    age: 21,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=25",
  },

  // 26
  {
    id: 26,
    name: "Omer Farooq",
    email: "omer@example.com",
    phone: "03251234567",
    class: "BS CS",
    age: 22,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=26",
  },

  // 27
  {
    id: 27,
    name: "Mehwish Ali",
    email: "mehwish@example.com",
    phone: "03261234567",
    class: "BS SE",
    age: 21,
    status: "Pending",
    image: "https://i.pravatar.cc/150?img=27",
  },

  // 28
  {
    id: 28,
    name: "Talha Ahmed",
    email: "talha@example.com",
    phone: "03271234567",
    class: "BS IT",
    age: 23,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=28",
  },

  // 29
  {
    id: 29,
    name: "Komal Khan",
    email: "komal@example.com",
    phone: "03281234567",
    class: "BS CS",
    age: 20,
    status: "Active",
    image: "https://i.pravatar.cc/150?img=29",
  },

  // 30
  {
    id: 30,
    name: "Rehan Malik",
    email: "rehan@example.com",
    phone: "03291234567",
    class: "BS IT",
    age: 22,
    status: "Inactive",
    image: "https://i.pravatar.cc/150?img=30",
  },
];

export default students;