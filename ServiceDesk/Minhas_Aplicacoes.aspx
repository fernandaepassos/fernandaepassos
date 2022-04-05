﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Minhas_Aplicacoes.aspx.cs" Inherits="Minhas_Aplicacoes" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN" "http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" >

<SCRIPT LANGUAGE="JavaScript" SRC="js/PopUps.js"></SCRIPT>

<head id="Head1" runat="server">
<title>Help Desk  ITIL Compliance :: Minhas Aplicações</title>
<link rel="stylesheet" href="css/estilo.css" type="text/css">
    <script language="javascript">
        function Somente_Numeros(codigo)
        { 
            var Tecla = event.which;
            if(Tecla == null)
            {
                Tecla = event.keyCode;
                if ( Tecla < 48 ||  Tecla > 57)
                {
                    event.returnValue = false;
                    return false
                }
                event.returnValue = true;
                return true
            }  
        }
    </script> 
    <script language="javascript">
        function verifica() {
	        if (confirm("Deseja mesmo excluir este item?")) {
		        return true;
	        }
	        else {
		        return false;
	        }
        }
    </script>
</head>
<body bottommargin="0" leftmargin="0" rightmargin="0" topmargin="0" class="body">
    <form id="form1" runat="server" style="margin:0px">
        <div>
            <table width="100%" border="0" cellpadding="0" cellspacing="0">           
                <tr id="Tr1" runat=server>
                    <td height="0" align="center" valign="middle">
                        <div id="divMensagem" style="width: 100%;" runat="server" class="Mensagem" visible="true">
                            <table width="776" border="0" cellspacing="5" cellpadding="0">
                                <tr>
                                    <td width="60" align="center" valign="bottom"><asp:Image ID="imgIcone" runat="server"  /></td>
                                    <td align="center" valign="bottom"> <asp:Label ID="lblMensagem" runat="server" Font-Names="Trebuchet MS" ForeColor="#1D6E6F"></asp:Label></td>
                                </tr>
                            </table>    
                        </div>
                    </td>
                </tr>            
                <tr>
                    <td height="20" colspan="2" align="center" valign="top">&nbsp;                  </td>
                </tr>
                <tr>
                  <td align="center" valign="top" colspan="2"><table width="97%"  border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td align="center" valign="top"><table width="100%" border="0" cellpadding="0" cellspacing="0" id="tabelaPadrao">
                          <!--DWLayoutTable-->
                          <tr>
                            <td height="22" colspan="3">
                              <table width="100%" border="0" cellpadding="0" cellspacing="0" id="tabelaCabecalho">
                                <!--DWLayoutTable-->
                                <tr>
                                  <td width="8" height="22" class="esq_top">&nbsp;</td>
                                  <td align="left" valign="top" class="centro_top"><table width="100%" height="22"  border="0" cellpadding="0" cellspacing="0">
                                      <tr>
                                        <td width="20" align="center" valign="middle">&nbsp;</td>
                                        <td align="left" valign="middle" class="tituloFont">Aplica&ccedil;&atilde;o</td>
                                      </tr>
                                  </table></td>
                                  <td width="8" class="dir_top"></td>
                                </tr>
                            </table></td>
                          </tr>
                          <tr>
                            <td colspan="3" align="center" valign="top" class="fundo_tabela">
							<asp:Panel ID="pnlFiltro" runat="server" Width="100%" CssClass="dataGrid">
							<table width="100%"  border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td align="center" valign="top"><table width="100%"  border="0" cellspacing="0" cellpadding="0">
                                  <tr>
                                    <td align="center" valign="top">
                                      
                                        <table width="92%" border="0" cellpadding="0" cellspacing="2">
                                          <tr>
                                            <td width="40" height="20" align="left">C&oacute;digo:</td>
                                            <td align="left"><asp:TextBox ID="txtCodigo" runat="server" onKeyPress="Somente_Numeros(this)" MaxLength="5" Width="40px" CssClass="campo_texto" Height="18px"></asp:TextBox></td>
                                            <td width="40" align="left">Descri&ccedil;&atilde;o: </td>
                                            <td align="left">
                                              <asp:TextBox ID="txtDescricao" runat="server" Width="250px" CssClass="campo_texto"></asp:TextBox>
                                            </td>
                                            <td width="40" align="left">Sigla:</td>
                                            <td align="left"><asp:TextBox ID="txtSigla" runat="server" CssClass="campo_texto" Width="60px"></asp:TextBox></td>
                                            <td width="40" align="left">Vers&atilde;o:</td>
                                            <td align="left"><asp:TextBox ID="txtVersao" runat="server" CssClass="campo_texto" Width="120px"></asp:TextBox></td>
                                            <td align="center" valign="middle">
                                              <asp:Button ID="btnFiltra" runat="server" CssClass="botao" Text="Filtrar" OnClick="btnFiltra_Click" />                                
            </td>
                                          </tr>
                                        </table>
                                                                       </td>
                                  </tr>
                                </table></td>
                              </tr>
                              <tr>
                                <td align="left" valign="top">
								<asp:Panel ID="Panel1" runat="server"  Height="420px" Width="100%" ScrollBars="Vertical" CssClass="dataGrid">
                                                                    <asp:GridView ID="gvAplicacao" HorizontalAlign="Center" Width="98%" AutoGenerateColumns="False" runat="server"
                                                                    CellPadding="4"  GridLines="None" OnRowCommand="gvAplicacao_RowCommand" OnRowDataBound="gvAplicacao_RowDataBound">
                                                                    <FooterStyle CssClass="footerGrid" />
                                                                    <HeaderStyle CssClass="topoGrid" />
                                                                    <RowStyle BackColor="#F4FBFA" />
                                                                    <Columns>
                                                                    <asp:TemplateField HeaderText="C&#243;digo">
                                                                    <ItemTemplate>
                                                                    <asp:Label ID="lblCodigo" Text='<%# DataBinder.Eval(Container.DataItem, "aplicacao_codigo") %>' runat="server"></asp:Label>
                                                                    </ItemTemplate>
                                                                        <ItemStyle Width="50px" />
                                                                        <HeaderStyle Width="50px" />
                                                                    </asp:TemplateField> 
                                                                    <asp:TemplateField HeaderText="Aplica&#231;&#227;o">
                                                                    <ItemTemplate>
                                                                    <%# DataBinder.Eval(Container.DataItem, "descricao")%>
                                                                    </ItemTemplate>
                                                                    <HeaderStyle HorizontalAlign="Left" Width="200px" />
                                                                    <ItemStyle HorizontalAlign="Left" Width="200px" />
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField HeaderText="Sigla">
                                                                    <ItemTemplate>
                                                                    <%# DataBinder.Eval(Container.DataItem, "sigla")%>
                                                                    </ItemTemplate>
                                                                    <HeaderStyle HorizontalAlign="Center" />
                                                                    <ItemStyle HorizontalAlign="Center" />
                                                                    </asp:TemplateField>
                                                                    <asp:TemplateField>
                                                                    <ItemTemplate>
                                                                    <a href=<%=strLinkPagina%><%# DataBinder.Eval(Container.DataItem, "aplicacao_codigo")%><%=strFimLinkPagina%>><asp:Image ID="Image1" runat=server ImageUrl="~/images/icones/detalhe.gif" /></a>
                                                                    </ItemTemplate>
                                                                    <HeaderStyle HorizontalAlign="Center" Width="20px" />
                                                                    <ItemStyle HorizontalAlign="Center" Width="20px" />
                                                                    </asp:TemplateField>
                                                                    <asp:ButtonField ButtonType="Image" CommandName="Excluir" Text="Excluir" ImageUrl="images/icones/excluir.gif" >
                                                                        <ItemStyle HorizontalAlign="Center" Width="20px" />
                                                                        <HeaderStyle Width="20px" />
                                                                    </asp:ButtonField>
                                                                    </Columns>
                                                                    <PagerStyle BackColor="#F4FBFA" ForeColor="White" HorizontalAlign="Center" />
                                                                    <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
                                                                    <EditRowStyle BackColor="#2461BF" />
                                                                    <AlternatingRowStyle BackColor="White" />
                                                                    </asp:GridView>
                                                                </asp:Panel>
								</td>
                              </tr>
                            </table>
							</asp:Panel> 
							</td>
                          </tr>
                          <tr>
                            <td colspan="3" align="left" valign="top">
                              <table width="100%" border="0" cellpadding="0" cellspacing="0" id="tabelaRodape">
                                <!--DWLayoutTable-->
                                <tr>
                                  <td width="8" height="7" class="esq_down"></td>
                                  <td valign="top" class="centro_down"></td>
                                  <td width="8" class="dir_down"></td>
                                </tr>
                            </table></td>
                          </tr>
                      </table></td>
                    </tr>
                  </table></td>
                </tr>
            </table>
        </div>
    </form>
</body>
</html>