const ua = {
  general: {
    btnOk: "ok",
    btnCancel: "cancel",
    btnSave: "Save",
    btnUpload: "btnUpload",
    btnPrint: "Ptint",
  },

  auth: {},

  menu: {
    userName: "User:",
    userRole: "Role:",
    userPlace: "Place:",
    menuPlace: "Edit Place",
    menuWorkers: "Edit Workers",
    menuMenuItems: "Edit Menu",
    menuOrders: "Track Orders",
    menuWaiters: "Track Waiters",
    menuDashboard: "Dashboard",
    menuLogout: "Logout",
  },

  footer: {
    info: "Information",
    infoAbout: "About",
    infoWorks: "How it works",
    infoPartners: "Our partners",
    contacts: "Our contacts",
  },

  place: {
    pagename: "Set / edit restaurant details",
    subheader: "Restaurant details settings",
    description:
      "In this section you can record details of you restaurant. This information will be avialibe to your clients in their application. After you compleate this section print QR codes.",
    empyMessage: "Do not have place yet. Please create one :)",

    btnEdit: "Place edit",
    btnAdd: "Place add",
    btnShowQr: "Show QR",
    labels: {
      link: "Link:",
      name: "NameX:",
      tables: "Number of tables:",
      address: "Address:",
      city: "City:",
      country: "Country:",
      phone: "Phone:",
      email: "Email:",
      description: "Description:",
      uploadBg: "labelUploadBg",
      uploadLogo: "labelUploadLogo",
    },
    modalEditHeader: "Edit your place",
    modalQrHeader: "Print this QRs",
    modelQrTable: "Table",
  },

  workers: {
    pagename: "Add / edit your workers",
    subheader: "Workers' settings",
    description:
      "In this section you can record all details of you restaurant. this information will be avialibe to your clients in their part of application.",
    btnAddWorker: "Add worker",
    tableEmail: "email",
    tableName: "name",
    tablePhone: "phone",
    tableRole: "role",
    tableEdit: "edit",
    tableDelete: "delete",
    labelEmail: "Email",
    labelPassword: "Password",
    labelName: "Name",
    labelPhone: "Phone",
    labelRole: "Please select role for the worker",
    modalEditHeader: "Edit your worker",
  },

  menuItems: {
    pagename: "Edit menu items",
    subheaderGroups: "Create menu groups",
    descriptionGroups: "Please enter the groups you want to use in your menu and then drag and drop group items to arange them accordingly",
    subheaderItems: "Create menu items",
    descriptionItems:
      "Please create your menu items. You can create menu items one by one by preassing the button add item or you can download csv file and fill it in excel after which you can upload the file",
    empyMessageItems: "ou do not have menu items yet. Please create some",

    table: {
      rank: "rank",
      groupName: "group",
      name: "name",
      description: "description",
      weight: "weight",
      price: "price",
      image: "image",
      edit: "edit",
      delete: "delete",
    },
  },

  orders: {
    pagename: "Track Orders",
    subheader: "Select what to look",
    description:
      "in this arear you can select all the orders or look only on orders that were already accepted or those which were already compleated. Please select what you want to look in the following menu",
    empyMessage: "Do not have orders yet.",
    tabs: {
      all: "All items",
      notCompleated: "Not compleated items",
      compleated: "Compleated items",
    },
    table: {
      table: "table",
      order: "order",
      items: "items",
      ordered: "ordered",
      control: "control",
    },
  },

  waiters: {
    pagename: "Workers details",
    subheader: "here you can select bla bla bla",
    description:
      "In this section you can record all details of you restaurant. this information will be avialibe to your clients in their part of application.",
    emptyMessage: "Do not have waiters' requests yet.",

    tabs: {
      all: "All items",
      notCompleated: " Not compleated items",
      compleated: "Compleated",
    },
    table: {
      table: "table",
      client: "client",
      time: "time",
      control: "control",
    },
  },

  dashboard: {
    pagename: "Dashboard",
    subheader: "",
    description: "",
    empyMessage: "",

    kpis: {
      revenu: "Revenue",
      orders: "Orders",
      average: "Average rder",
    },

    tabs: {
      graph: "Graph",
      table: "Table",
    },

    table: {
      period: "period",
      items: "items",
      orders: "orders",
      revenue: "revenue",
      aveOrder: "average order",
    },
  },
};

export default ua;
