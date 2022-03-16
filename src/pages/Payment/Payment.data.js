import { Images } from "../../utils";
import * as yup from "yup";

export const initialValues = {
  phone: "",
  email: "",
  phoneOtp: "",
  emailOtp: "",
  firstName: "",
  lastName: "",
  shippingAddress: "",
  addressOptional: "",
  city: "",
  province: "",
  postalCode: "",
  recipientName: "",
  courier: false,
  payment: false,

  //Creadit card
  cardNumber: "",
  cardExpiry: "",
  cardCVC: "",
  cardPostCode: "",
};

export const fieldPlaceholders = {
  phone: "Phone Number",
  email: "Email",
  phoneOtp: "Phone OTP",
  emailOtp: "Email OTP",
  firstName: "First Name",
  lastName: "Last Name",
  shippingAddress: "Shipping Address",
  addressOptional: "Address Optional",
  city: "City",
  province: "Province",
  postalCode: "Postal Code",
  recipientName: "Recipient's Name",
  courier: "Courier",
  payment: "Payment",

  //Creadit card
  cardNumber: "Card Number",
  cardExpiry: "Expiry (MM/YY)",
  cardCVC: "CVC",
  cardPostCode: "Card Postcode",
};

export const fieldNames = {
  phone: "phone",
  email: "email",
  phoneOtp: "phoneOtp",
  emailOtp: "Email OTP",
  firstName: "firstName",
  lastName: "lastName",
  shippingAddress: "shippingAddress",
  addressOptional: "addressOptional",
  city: "city",
  province: "province",
  postalCode: "postalCode",
  recipientName: "recipientName",
  courier: "courier",
  payment: "payment",
  //Creadit card
  cardNumber: "cardNumber",
  cardExpiry: "cardExpiry",
  cardCVC: "cardCVC",
  cardPostCode: "cardPostCode",
};

export const validationSchema = yup.object().shape({
  phone: yup.string().required(),
  email: yup.string().required().email(),
  phoneOtp: yup.string().required().min(6),
  emailOtp: yup.string().required().min(6),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  shippingAddress: yup.string().required(),
  cardNumber: yup.string().required().min(16),
  cardExpiry: yup.string().required(),
  cardCVC: yup.string().required().min(3),
  cardPostCode: yup.string().required(),
});

export const mockAddressData = {
  name: "Laura Martin",
  phone: "+62 821 2345 6789",
  address:
    "The Olivia Apartments, 23, Kecamatan Pasar Minggu, Jakarta Selatan, DKI Jakarta 12345 ",
};

export const orderSummaryData = {
  id: "#FC12345",
  products: [
    {
      id: 0,
      image: Images.sampleImage,
      name: "Strawberry Body Butter 200 ml",
      quantity: 1,
      amount: 200,
      type: "ml",
      category: "Peony",
      price: 269.1,
    },
  ],
  subtotal: 269.1,
  shippingCosts: 0,
  adminFee: 1.5,
  total: 270.6,
};

export const addressListData = [
  {
    id: 0,
    title: "The Olivia Apartments",
    address: "Jakarta Selatan, DKI Jakarta, 12345",
  },
  {
    id: 1,
    title: "The Olivia Garden & Resto",
    address: "Jakarta Barat, DKI Jakarta, 13290",
  },
  {
    id: 2,
    title: "The Olivia",
    address: "Jakarta Barat, DKI Jakarta, 13290",
  },
  {
    id: 3,
    title: "The Olivia Apartments Lobby",
    address: "Jakarta Barat, DKI Jakarta, 13290",
  },
];

export const courierList = [
  {
    id: 0,
    title: "AnterAja",
    description: "Pengirman (2-3 hari)",
    price: 17.0,
    isChecked: false,
    image: Images.anterAja,
    currencyType: "Rp",
  },
  {
    id: 1,
    title: "Gosend",
    description: "Pengirman (2-3 jam)",
    price: 40.0,
    isChecked: false,
    image: Images.gosend,
    currencyType: "Rp",
  },
  {
    id: 2,
    title: "JNE Express",
    description: "Pengirman (1-2 hari)",
    price: 17.0,
    isChecked: false,
    image: Images.jne,
    currencyType: "Rp",
  },
];

export const cardList = [
  {
    id: 0,
    title: "Debit/Credit Card",
    description: "Link your Credit Card Account",
    image: Images.creditCard,
    phone: "123 123",
  },
  {
    id: 1,
    title: "GoPay",
    description: "Link your GoPay Account",
    image: Images.goPay,
    voucher: "50k",
    phone: "123 123",
    tag: "Voucher 50k",
  },
  {
    id: 2,
    title: "ShopeePay",
    description: "Link your ShopeePay Account",
    image: Images.shopeePay,
    phone: "123 123",
  },
  {
    id: 3,
    title: "OVO",
    description: "Link your OVO Account",
    image: Images.ovo,
    promo: "10%",
    phone: "123 123",
    tag: "Promo 10%",
  },
  {
    id: 4,
    title: "DANA",
    description: "Link your DANA Account",
    image: Images.dana,
    phone: "123 123",
  },
];

export const paymentMethodList = [
  {
    id: 0,
    title: "Credit/Debit Card",
    children: [
      {
        id: 0,
        title: "Debit/Credit Card",
        description: "Link your Credit Card Account",
        image: Images.creditCard,
        phone: "123 123",
        isActivated: false,
        isChecked: false,
      },
    ],
  },
  {
    id: 1,
    title: "BCA Debit Card",
    children: [
      {
        id: 0,
        title: "Debit Card",
        description: "Link your Debit Card Account",
        image: Images.bca,
        phone: "123 123",
        isActivated: false,
        isChecked: false,
      },
    ],
  },
  {
    id: 2,
    title: "E-Wallet",
    children: [
      {
        id: 0,
        title: "GoPay",
        description: "Link your GoPay Account",
        image: Images.goPay,
        voucher: "50k",
        phone: "123 123",
        tag: "Voucher 50k",
        isActivated: false,
        isChecked: false,
      },
      {
        id: 1,
        title: "ShopeePay",
        description: "Link your ShopeePay Account",
        image: Images.shopeePay,
        phone: "123 123",
        isActivated: false,
        isChecked: false,
      },
      {
        id: 2,
        title: "OVO",
        description: "Link your OVO Account",
        image: Images.ovo,
        promo: "10%",
        phone: "123 123",
        tag: "Promo 10%",
        isActivated: false,
        isChecked: false,
      },
      {
        id: 3,
        title: "DANA",
        description: "Link your DANA Account",
        image: Images.dana,
        phone: "123 123",
        isActivated: false,
        isChecked: false,
      },
    ],
  },
  {
    id: 3,
    title: "Kredivo",
    children: [
      {
        id: 0,
        title: "Debit Card",
        description: "Link your Kredivo Account",
        image: Images.creditCard,
        phone: "123 123",
        isActivated: false,
        isChecked: false,
      },
    ],
  },
];

export const cardListActivated = [
  {
    id: 0,
    title: "BCA",
    description: "",
    image: Images.bca,
    tag: "Promo 10%",
    isChecked: true,
  },
  {
    id: 1,
    title: "Mandiri",
    description: "",
    image: Images.mandiri,
    tag: "",
    isChecked: false,
  },
];

export const provinceList = [
  {
    id: 0,
    title: "Bali",
    isChecked: true,
  },
  {
    id: 1,
    title: "Bangka Belitung",
    isChecked: false,
  },
  {
    id: 2,
    title: "Banten",
    isChecked: false,
  },
  {
    id: 3,
    title: "Bengkulu",
    isChecked: false,
  },
  {
    id: 4,
    title: "Daerah Istimewa Yogyakarta",
    isChecked: false,
  },
  {
    id: 5,
    title: "Gorontalo",
    isChecked: false,
  },
  {
    id: 6,
    title: "DKI Jakarta",
    isChecked: false,
  },
  {
    id: 7,
    title: "Jambi",
    isChecked: false,
  },
  {
    id: 8,
    title: "Jawa Barat",
    isChecked: false,
  },
  {
    id: 9,
    title: "Jawa Tengah",
    isChecked: false,
  },
  {
    id: 10,
    title: "Jawa Timur",
    isChecked: false,
  },
  {
    id: 11,
    title: "Kalimantan Barat",
    isChecked: false,
  },
  {
    id: 12,
    title: "Kalimantan Selatan",
    isChecked: false,
  },
];

export const cityList = [
  {
    id: 0,
    title: "Jakarta Barat",
    isChecked: true,
  },
  {
    id: 1,
    title: "Jakarta Pusat",
    isChecked: false,
  },
  {
    id: 2,
    title: "Jakarta Selatan",
    isChecked: false,
  },
  {
    id: 3,
    title: "Jakarta Timur",
    isChecked: false,
  },
];

export const postalCodeList = [
  {
    id: 0,
    title: "12560 - Cilandak Timur",
    isChecked: true,
  },
  {
    id: 1,
    title: "12540 - Jati Padang",
    isChecked: false,
  },
  {
    id: 2,
    title: "12520 - Kebagusan",
    isChecked: false,
  },
  {
    id: 3,
    title: "12345 - Pasar Minggu",
    isChecked: false,
  },
  {
    id: 4,
    title: "12510 - Pejaten Barat",
    isChecked: false,
  },
  {
    id: 5,
    title: "12510 - Pejaten Timur",
    isChecked: false,
  },
  {
    id: 6,
    title: "12550 - Ragunan",
    isChecked: false,
  },
  {
    id: 7,
    title: "12840 - Bukit Duri",
    isChecked: false,
  },
  {
    id: 8,
    title: "12830 - Kebon Baru",
    isChecked: false,
  },
  {
    id: 9,
    title: "12850 - Manggarai",
    isChecked: false,
  },
  {
    id: 10,
    title: "12860 - Manggarai Selatan",
    isChecked: false,
  },
  {
    id: 11,
    title: "12870 - Menteng Dalam",
    isChecked: false,
  },
  {
    id: 12,
    title: "12810 - Tebet Barat",
    isChecked: false,
  },
];
