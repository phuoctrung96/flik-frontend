import { Images } from "../../utils";
import * as yup from "yup";

export const initialValues = {
  phone: "",
  email: "",
};

export const fieldPlaceholders = {
  phone: "Phone Number",
  email: "Email",
};

export const fieldNames = {
  phone: "phone",
  email: "email",
};

export const validationSchema = yup.object().shape({
  phone: yup.string().required(),
  email: yup.string().required(),
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
    isChecked: true,
    image: Images.anterAja,
  },
  {
    id: 1,
    title: "Gosend",
    description: "Pengirman (2-3 jam)",
    price: 40.0,
    isChecked: false,
    image: Images.gosend,
  },
  {
    id: 2,
    title: "JNE Express",
    description: "Pengirman (1-2 hari)",
    price: 17.0,
    isChecked: false,
    image: Images.jne,
  },
];

export const cardList = [
  {
    id: 0,
    title: "Debit/Credit Card",
    description: "Link your Credit Card Account",
    image: Images.creditCard,
  },
  {
    id: 1,
    title: "GoPay",
    description: "Link your GoPay Account",
    image: Images.goPay,
    voucher: "50k",
  },
  {
    id: 2,
    title: "ShopeePay",
    description: "Link your ShopeePay Account",
    image: Images.shopeePay,
  },
  {
    id: 3,
    title: "OVO",
    description: "Link your OVO Account",
    image: Images.ovo,
    promo: "10%",
  },
  {
    id: 4,
    title: "DANA",
    description: "Link your DANA Account",
    image: Images.dana,
  },
];
