function server() {
  return process.env.NEXT_PUBLIC_API_URL ?? "https://xgen.onrender.com/api/";
}

export const ApiConfigs = {
  base_url: server(),
  /* -------------------------------- */

  apis: {
    auth: {
      user: { register: "users" },
      collector: { register: "collector" },
      enterprise: { register: "entreprise" },
      login: "users/login",
    },
    collector: {
      store: "collector/AddCollector",
    },
    enterprise: {
      store: "entreprise/AddEntreprise",
    },
    binPoint: {
      getAll: "Pointbin/fetchAllPointBin",
      getAllBinPoints: "bin/fetchAllPointBins",
    },
    bin: {
      getAllBinsNotInPointBins: "bin/FetchBinsNotInPointBins",
      getAllBins: "bin/FetchAllBins",
      store: "bin/createBin",
      remove: "bin/deleteBinById/{id}",
      update: "bin/updateBin/{id}",
    },
    score: {
      getScore: "score/findScore",
    },
    cleaningService: {
      getCleaningService: "cleaning/findSingleCleaningService",
      store: "cleaning",
      remove: "cleaning/delete/{id}",
    },
    governorates: {
      getGovernorates: "governorates",
    },
    user: {
      getCurrentAccessList: "users/access/getCurrentAccessList",
      addAccessCode: "users/access/addAccess",
      getAllUsersWithSameBinAccessCode:
        "users/access/getAllUserWhoHasASameAccessBin",
      getAllUsers: "users/getUsers",
    },
    municipalRequests: {
      getAll: "demande-municipal/findDemandeInProgress",
    },
    quoteRequests: {
      getAll: "site/quote/fetchAll",
      createQuote: "site/createQuote",
    },
    TechnicalAssistance: {
      getAll: "site/TechAssist/fetchAll",
    },
    contactRequests: {
      getAll: "site/contactUs/fetchAll",
    },
  },
};
