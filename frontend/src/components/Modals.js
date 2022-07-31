import React from "react";

export default function Modals({children, open, setOpen})
{
	const handleOpen = () => setOpen(!open);

	return (
		<>	
			<div className={`modal ${open ? "modal-open" : ""}`}>
				<div className="modal-box max-w-sm"><button onClick={handleOpen} className="btn btn-sm btn-circle absolute right-2 top-2 bg-slate-700 border-0">✕</button>
					{children}
				</div>
			</div>
		</>
	);
}