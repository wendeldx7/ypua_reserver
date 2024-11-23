import React, { useState } from "react";
import {
    NavbarLateral,
    BotaoToggle,
    ItemLink,
    NomeLink,
    Separador,
    ContainerSuperior,
    Logo,
    IconesDireita,
    FotoPerfil,
    BotaoNotificacao,
} from "../Styles/PerfilStyled";

import LogoImg from "../image/logo.png";
import FotoPerfilImg from "../image/perfil.png";
import IconeNotificacao from "../image/notificacao.png";

import Link1Img from "../Image/NavbarPerfil/ajuda.png";
import Link2Img from "../Image/NavbarPerfil/calendario.png";
import Link3Img from "../Image/NavbarPerfil/grafico.png";
import Link4Img from "../Image/NavbarPerfil/local.png";
import Link5Img from "../Image/NavbarPerfil/sair.png";

const PaginaPerfil = () => {
    const [navbarAberta, setNavbarAberta] = useState(false);

    const toggleNavbar = () => setNavbarAberta(!navbarAberta);

    const links = [
        { img: Link1Img, nome: "Início" },
        { img: Link2Img, nome: "Perfil" },
        { img: Link3Img, nome: "Configurações" },
        { img: Link4Img, nome: "Ajuda" },
        { img: Link5Img, nome: "Sair" },
    ];

    return (
        <>
            <ContainerSuperior>
                <Logo src={LogoImg} alt="Logo" />
                <IconesDireita>
                    <FotoPerfil src={FotoPerfilImg} alt="Foto de Perfil" />
                    <BotaoNotificacao src={IconeNotificacao} alt="Notificação" />
                </IconesDireita>
            </ContainerSuperior>
            <NavbarLateral aberta={navbarAberta}>
                <BotaoToggle onClick={toggleNavbar}>☰</BotaoToggle>
                {links.map((link, index) => (
                    <div key={index}>
                        <ItemLink>
                            <img src={link.img} alt={link.nome} />
                            {navbarAberta && <NomeLink>{link.nome}</NomeLink>}
                        </ItemLink>
                        {index < links.length - 1 && <Separador />}
                    </div>
                ))}
            </NavbarLateral>
        </>
    );
};

export default PaginaPerfil;
