const getState = ({ getStore, getActions, setStore }) => {
	return {


		
		store: {
			contacts: [],
		},




		actions: {
		

				createContact: (contact) => {
					fetch("https://playground.4geeks.com/contact/agendas/")
				}

		}
	};
};

export default getState;
