import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => (
	<>
	<div className="top m-auto">
		<div className="bridge">
		<h1 className="login">Login your account</h1>
		<div>
			<div>E-mail</div>
			<input className="m-2 rounded-pill " type="text" placeholder=" Your E-mail">
			</input>
		</div>

		<div>
			<div>Password</div>
			<input className="m-2 rounded-pill" type="text" image placeholder=" Your password ">
			</input>
		</div>
		</div>
		<div className="drop">
		<div className="regis">Register</div>
		<div className="sign">Sign In</div>
		</div> 
		<div className="middle">
			<div className="remember">
			<div className="box"></div>
			<div>Remember me</div>
			</div>
			<div>Forgot password?</div>
		</div>
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAACBCAMAAACl85XBAAABKVBMVEX///8AAADR0dE4ODhBQUHKysoA4/8A8HYAqsEA4P/39/dfX1+4uLiQkJDu7u7m5uYA0v8AyP/f398Az///ywB1dXUA1f8A6v/CwsIAwv8A2P+oqKhpaWkzMzNJSUlPT08kJCQXFxf5NkeBgYH/0gAMDAwAn8FXV1f/xAD/OkScnJwdHR0A09Hkvg10ZxiLfg/vL0wIGyIjimIkk10RPCgIcZYQ1N0Z0XQdzHcanF4UHxcAlsAIx9gS2GgT33kWfkwNbTsRNScSsmIOSi4Rjk0RZz0A82gULht26mb2zR6ZgRUzLg9mWQf/4AJisrTeyRN/nMb3cjxvp9B7qcb/ITOxITYmEAzDLTlVFxxts8+OGy9BEhbxADroKFTFJ0doFCgAjZ+DLEEzChbM2f4tAAAFiElEQVR4nO2aC1fbNhSArxwbhh9SEbi4WH5h0oDTbnQPuifdq127rds62q2w0j3+/4/YlZyEkJCG4HBCe+53DkbFsnw/S1e27AIQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBPHOIq1rhLyEgBV4duvaYHvBzBKyzNm1Ii9ndODxokMeJ+azdUJn0QGP483WDY696IDHsR1SmEK3wd4LcnmFex9+9PG01itX4ASQudyVFXfBLTH5ogoLLuZUN+ICQpbiD3O9RSh8sn//088+f2PjAVe5QgWeZmmS+k6aaIVuZsUZXv9IZnnoKhv4ohS+WP3yq4ODB2+QSITHiqJdZLyb4N2kivQfY9w6ARbaPNOWTiYtf1EKa7f2Dw6W7389se3UTVgspWPjQHLq4IcUOqKN21B0RItnfCEKt2+s3rqzjNz/ZkLbuhdsrxI2T+xkTKHtpsz0gsgra0EKN9dWb+1rh+Vvvzu/8QBUqkSQck953VEF7CCVheClImHOYgbS7c01dLjzSDscfD/BQXBRMVtybqWs8vWf9DYqdamIOReKpVbCsiZ3/SYKN7TDvnFYPnh4bl4XeaG3CI4cXTTbol3v7dZ7ez8LUFi5aRxMPuiUeNggjCZcXuG9lc2bw/2AKfHD26ewebYfHj/58ae3S2Hp1OFRbbC+fff90RMo37Lq9J1Cos7OSoXSmDS3VXZVCgMHPbc+3tlZX99+evfn4eaz/rO8KqYplCDPRubWR8ZtVkF0ZQpDY+nxE6Owvf30g9PWOxzXeWUYWCDb0xRCsEYVfN/H8Hy8v/hXp9B3WP1lZ6ev8OsgIbocrEIX2sH0Ffc5CvqXB5BcmcLGysDhxm+vnu2M90IM8uIrggkKzIfgihW0w+bvu7u7z9ZHc6ElYSSPk8qvelKBH6e92P0qt1VRK9ixH05QwCM6rN3xTIdmahBJE4WlnsPK4fNd7bAzMiN5wPXp8KwGHY2mYjp3TWu42zbvHzgoo2BqCHtIIewNpNBkt4U1tE4HoDMXhdph6XALMQ5n7wtKL2YYyy1cpbmuwHEFQYkbpSPww4BDzBIJsiwFgKcVKoAyjOsRhQoRgluTzhh6iPXiBNwWPmmBM5eBtGQclo6ebxmHrRd/nB02vV7II4EAT7leYmI8kknQ76MyFzq9qdStFVzIWAslQzaYVDlOqmYgJZnKSlcyC/A5d6gTmiosrWwc7hmDrT9fshFscZoLGXAFlp5ZU85tHSoiQUVgHrx9o2Bjj0R4kiCpFcoyKG1j7bNUB+qCzBUInfrF3BQ2jl7t7aHE3stzJn4frP5kGkPUm3JagqeuWe4wB5RVW8ZGIdWniNK6pX469xQEWCEKyySX0HFq8bkobBxqg7294/H4kYRDVE9AmJR2xvV7C8xkweruyTl4Ve0l6oEEZoCl+bhCF1zTjEzwX7gKGbrPNFPYODICL/4618BELqu0hVdPx4b3aJspncQluCGzLRwOmA+xmYiMgr7KzBMyO0cBRz8ei/sLXpvORaHug9dveHboWPVxrun4+oFJzyWxKWE8vckS+0MndtcZ1GA4qvqtVDiQzBEChJmOYPgcTRQ2Dk9OTl7/PVkAaZexJaOqnj/ywJFRaYzLSDqVzlrmxdLBJM6yquzXqCtXVb8RLw5Zt3SsOCv1t4Hg7FNfE4WjV9MEDN3uaTe1T8t1qW17uiTAHtSYeDWKXkHgnWUuCv8cnrw+nvr8OQ3MBWXuFRf/8hLUk/McFO79e/xfUwG8tJjJEm/OF1kU1XStkcqLfzkf6Fc0anq9Pqk1sv5ZvAIr0rTR8ddAoSkzKsgGLw6vihm/tb0DXzzfge/O6HC9vv6r2b/+awln0f/xYojLCBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAE8ZbwP4ZKnQiU2YNHAAAAAElFTkSuQmCC"></img>
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAAB/CAMAAAD4pI8eAAAAY1BMVEX///8AAADV1dY4Nztra27r6+37+/vy8vLp6emxsbFKSkqenp5gYGAsLCylpaWCgoLKysrb29uVlZVnZ2fExMR5eXlxcXE5OTmMjIy7u7tRUVEYGBji4uIgICBDQ0NWVlYQEBCxjvWtAAAE9klEQVR4nO2aa3ekKBCGKXZaLqIoiOK9//+vnEK7kzabzZw5czZtJvV8sFWwDy9UFRTKGEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEEQBEH8JYiJfyKTeLbeAxcVzPLPp7GsQV2erfmVOnbwyXSxfrbqO8KNn60eYHRncYCm+Hz1AEXzbN07Wf4M9QB59mzlG8I+R749h/VffjxH/o9zBP//kH89Xo3X9yq9jRrvRpH53UdPLb9z/fJwGaaqes9Hsvn4FPuXdF9Abb6a/IWz+nEt4KoliBXWMp9XA+0ArvCu1CBmCAr7pVVxBq+CSJW9clC0UQ14bqUaK6c8XC0evop8nJTKx2unMFL3HQpRvpon1026dmUP4hoqW8Wib/sAMqosDfhkm7yrc8dTV9QOahUniCpURys4r/wgWP1o+5v82NgelqqT3WRLtzaFrkCMpQNTgc95DByWNPqxAS2LZkimAV2/Avcgir7K+aFHTyw/F9VxGex66Opgm+vA56q0ubiavtvll2B7K3UffQ0mjT52g5+6m/ylMTf5+eIPPXpO+SEv7dwNgyvL8Bqxo1RVg0PZNw5aAbkEowrdgLyaSlXe87yKwHuVRn/kitulH0Ci/KLvZzR6WbSNUvrs8keOaxFR943EAtEM9/td23pMDLqAx9FDN8Csr/MA6M1DWAFMO3SwBL159xI8jHoGk7pv+TEORTo1YYCTyy/epGH/azZwPvnqWFLrD1r/98lfjoOfHYKCzvNf2ILPlcqHj+ucWb4/5mDTobUlYx/nRnsCLwP6kFm/ovxwLOgfG1tUGAo+UhMy4cfRMrbg3MD/AvnVY2NbltcyBfZiLWAwKSqMJp3drb1nLv1EEcYoap3WDdqY9DObuUgnizGPM//p5LfHAvGYqeVstZtAe3GlzCZXgM6cE5lUd/mbtRTDHNOzJVyVZBlHXzCZazIHaXevtieWv8pjiXttazFN3cIaXMhEJmTuUuHAROZyccsOsO+quI2uVpm0BvujtpFlLXiWTbmxTFp7eYgfp5P/dvstiy9tNSyHsWFo6TETaPkDk51m6XoVonu1HVHihU++b7Jpe46PhtVFWlLg5ZXx7rTy0cLf8DJWTRaLImIf4OinmDBjV2jWp3S/zu61gsJFo9QY+uo0UySr6DgrUtdhl0w+hCCFOa98/cb6xcsszrKa84mJJD/5+KjYqnez79mrkYDneHOTr7bbOGHs8gNGiUS9nlf+22Wfut8PTDZVhZnAchz99IKAb6M/233D2GLxe6OPk2GntV668cTy4dCk1w0fjhFsc47+5vsru6DvZziUgxAp4I0VC3uV2+jvvu8330f53e77qizOLH/Zlm5iP77sTq3isjuHEEm+dDFFfo31Iq71dhsJeBLaimEgxBnErugUPMRsi/zJMBxGfiwur2eWj84ruQttXkkeXm46cXODSrSRKZzsJCYAAytR/OXuIYHjn2UNhrZrLtk+7zNuMdXdZ1A3se2xU8vHXL57+LndW2+tXlYM/woGr69p8isfVn1Yy3i/blu/ozaHVd/+V4vxjynkOeX/iviSCwzH7dDf5WvKt/IuWmf5+y8wvpT833zHV7zkLbP/o88CTvKO75u/4f3m7/e/+9cd3/zbnu/+ZRf75t/1EQRBEARBEARBEARBEARBEARBEARBEARBEARBEARBEMQf8BPNGlcBIFMOlAAAAABJRU5ErkJggg=="></img>
	<footer className="footer mt-auto py-3 text-center">
		<p>
		By login, you agree to ther <a className="text-primary">Terms of service</a> and <a className="text-primary">Privacy Policy</a>
		</p>
	</footer>
	</div>



		<script src="https://kit.fontawesome.com/cd172e63fa.js" crossorigin="anonymous"></script>
	</>
);
