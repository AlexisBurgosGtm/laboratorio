
function getView(){
    let view = {
        body:()=>{
            return `
                <div class="col-12 p-0 bg-white">
                    <div class="tab-content" id="myTabHomeContent">
                        <div class="tab-pane fade show active" id="uno" role="tabpanel" aria-labelledby="receta-tab">
                           ${view.vista_login()}
                        </div>
                        <div class="tab-pane fade" id="dos" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_listado()}
                        </div>
                        <div class="tab-pane fade" id="tres" role="tabpanel" aria-labelledby="home-tab">
                            ${view.vista_nuevo()}
                        </div>
                        <div class="tab-pane fade" id="cuatro" role="tabpanel" aria-labelledby="home-tab">
                            
                        </div>    
                    </div>

                    <ul class="nav nav-tabs hidden" id="myTabHome" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active negrita text-success" id="tab-uno" data-toggle="tab" href="#uno" role="tab" aria-controls="profile" aria-selected="false">
                                <i class="fal fa-list"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-dos" data-toggle="tab" href="#dos" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>  
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-tres" data-toggle="tab" href="#tres" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link negrita text-danger" id="tab-cuatro" data-toggle="tab" href="#cuatro" role="tab" aria-controls="home" aria-selected="true">
                                <i class="fal fa-comments"></i></a>
                        </li>         
                    </ul>
                    
                </div>
               
            `
        },
        vista_login:()=>{
            return `
            <br><br>
            <div class="card card-rounded col-sm-12 col-lg-5 col-xl-5 col-md-5 shadow">
                <div class="card-body p-4">

                    <div class="form-group text-center">
                        <img src="./favicon.png" width="100px" height="100px">
                    </div>
                    
                    <br>
                    
                    <div class="form-group">
                        <label class="negrita">Clave de acceso</label>
                        <input type="password" class="form-control negrita" id="txtP" autocomplete="off">
                    </div>
                    
                    <br>

                    <div class="form-group text-center">
                        <button class="btn btn-success btn-circle btn-xl hand shadow" id="btnI">
                            <i class="fal fa-lock"></i>
                        </button> 
                    </div>


                </div>
            </div>
            `
        },
        vista_listado:()=>{
            return `
            <div class="card card-rounded shadow col-12">
                <div class="card-body p-2">

                    <div class="form-group">
                        <label>Buscar por codigo o por nombre</label>
                        <div class="input-group">
                            <input type="text" class="form-control negrita text-danger" id="txtFiltrar" placeholder="Escriba un codigo o nombre para buscar...">
                            <button class="btn btn-info hand" id="btnBuscar">
                                <i class="fal fa-search"></i>
                            </button>
                        </div>
                    </div>
                    
                    <br>

                    <div class="table-responsive col-12">
                        <table class="table table-responsive table-hover col-12">
                            <thead class="bg-info negrita text-white">
                                <tr>
                                    <td>EMPRESA</td>
                                    <td>CODIGO</td>
                                    <td>APELLIDOS Y NOMBRES</td>
                                    <td>PUESTO / AREA</td>
                                    <td>T.SALUD</td>
                                    <td>T.ALIMENTOS</td>
                                    <td>T.PULMONES</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                            </thead>
                            <tbody id="tblDataClientes">

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <button class="btn btn-danger btn-circle btn-xl hand shadow btn-bottom-l" onclick="document.getElementById('tab-uno').click()">
                <i class="fal fa-lock"></i>
            </button> 

             <button class="btn btn-success btn-circle btn-xl hand shadow btn-bottom-r" id="btnNuevo">
                <i class="fal fa-plus"></i>
            </button> 

            `
        },
        vista_nuevo:()=>{
            return `
              <div class="card card-rounded col-sm-12 col-lg-7 col-xl-7 col-md-8 shadow">
                <div class="card-body p-4">

                    <div class="form-group">
                        <label class="negrita">Empresa</label>
                        <select class="form-control negrita" id="cmbEmpresa">
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="negrita">CODIGO</label>
                        <input type="text" class="form-control negrita" id="txtCodigo" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label class="negrita">DPI CUI</label>
                        <input type="text" class="form-control negrita" id="txtDPI" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Apellidos y Nombres</label>
                        <input type="text" class="form-control negrita" id="txtNombre" autocomplete="off">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Fecha Nacimiento</label>
                        <input type="date" class="form-control negrita" id="txtFechaNacimiento">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Area de Trabajo</label>
                        <input type="text" class="form-control negrita" id="txtAreaTrabajo">
                    </div>

                    <div class="form-group">
                        <label class="negrita">Sector</label>
                        <input type="text" class="form-control negrita" id="txtSector">
                    </div>

                    <hr class="solid">

                    <h5 class="negrita text-danger text-center">Tarjetas</h5>

                    <div class="row">
                        
                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">T. Salud</label>
                                <select class="form-control negrita" id="cmbTSalud">
                                    <option value="SN">SN</option>
                                    <option value="SI">SI</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">T. Alimentos</label>
                                <select class="form-control negrita" id="cmbTAlimentacion">
                                    <option value="SN">SN</option>
                                    <option value="SI">SI</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="form-group">
                                <label class="negrita">T. Pulmones</label>
                                <select class="form-control negrita" id="cmbTPulmones">
                                    <option value="SN">SN</option>
                                    <option value="SI">SI</option>
                                    <option value="NO">NO</option>
                                </select>
                            </div>
                        </div>

                    </div>

                    <hr class="solid">

                    <h5 class="negrita text-danger text-center">Fotos del Individuo</h5>
            
                    <div class="row">
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body p-5 text-center">
                                    <label class="negrita">Foto Selfie</label>
                                    <input type="file" id="txtFoto1" class="form-control" onchange="preview_img('txtFoto1','img1');">
                                    <img src="" id="img1" width="150px" height="150px">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body p-5 text-center">
                                    <label class="negrita">Foto DPI Front</label>
                                    <input type="file" id="txtFoto2" class="form-control" onchange="preview_img('txtFoto2','img2');">
                                     <img src="" id="img2" width="150px" height="150px">
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                            <div class="card card-rounded shadow col-12">
                                <div class="card-body p-5 text-center">
                                    <label class="negrita">Foto DPI Tras</label>
                                    <input type="file" id="txtFoto3" class="form-control" onchange="preview_img('txtFoto3','img3');">
                                     <img src="" id="img3" width="150px" height="150px">
                                </div>
                            </div>
                        </div>

                        

                    </div>

            
            
                </div>
            </div>

            <button class="btn btn-secondary btn-circle btn-xl hand shadow btn-bottom-l" onclick="document.getElementById('tab-dos').click()">
                <i class="fal fa-arrow-left"></i>
            </button> 

             <button class="btn btn-info btn-circle btn-xl hand shadow btn-bottom-r" id="btnGuardar">
                <i class="fal fa-save"></i>
            </button> 
            `
        },
        vista_editar:()=>{

        }
    }

    root.innerHTML = view.body();

};

function addListeners(){

    let btnI = document.getElementById("btnI");
    btnI.addEventListener('click',()=>{

        let p = document.getElementById('txtP').value || '';

        if(p==''){F.AvisoError('Escriba una clave');return;}

        if(p==GlobalClave){
            document.getElementById('txtP').value = '';
            document.getElementById('tab-dos').click();
            //get_listado();
        }else{
            F.AvisoError('Escriba una clave valida');
            return;
        }

    })


    document.getElementById('btnNuevo').addEventListener('click',()=>{
        limpiar_datos();
        document.getElementById('tab-tres').click();
    })


    document.getElementById('txtFechaNacimiento').value = F.getFecha();



    get_data_empresas()
    .then((data)=>{
        let str = '';
        data.recordset.map((r)=>{
            str +=`<option value='${r.CODIGO}'>${r.EMPRESA}</option>`
        })
        document.getElementById('cmbEmpresa').innerHTML = str;
    })
    .catch(()=>{
        document.getElementById('cmbEmpresa').innerHTML = 'No hay datos'
    })



    let btnGuardar = document.getElementById('btnGuardar');
    btnGuardar.addEventListener('click',()=>{

        F.Confirmacion('Esta seguro que desea Crear este nuevo Cliente?')
        .then((value)=>{
            if(value==true){
      
                let codigo = document.getElementById('txtCodigo').value || '';
                if(codigo==''){F.AvisoError('Escriba un codigo valido');return;}
        
                let dpi = document.getElementById('txtDPI').value || '';
                if(dpi==''){F.AvisoError('Escriba un DPI CUI valido');return;}
                
                let nombre = document.getElementById('txtNombre').value || '';
                if(nombre==''){F.AvisoError('Escriba un nombre valido');return;}
        
                
                btnGuardar.disabled = true;
                btnGuardar.innerHTML = `<i class="fal fa-save fa-spin"></i>`;

                insert_cliente()
                .then(()=>{
                    F.Aviso('Cliente creado exitosamente!!');
                    get_listado();
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;

                    document.getElementById('tab-dos').click();
                
                })
                .catch(()=>{
                    F.AvisoError('No se pudo crear este cliente');
                    btnGuardar.disabled = false;
                    btnGuardar.innerHTML = `<i class="fal fa-save"></i>`;
                
                })


            }
        })

      

    })


    document.getElementById('btnBuscar').addEventListener('click',()=>{
        get_listado();
    })

    F.slideAnimationTabs();

};




function initView(){

    getView();
    addListeners();

};

function preview_img(idFile,idImage){

    let file = document.getElementById(idFile).files[0]
    F.converBase64(file)
    .then((imagen)=>{
        console.log(imagen)
        document.getElementById(idImage).src = imagen;
    })

    console.log(valor)

    return;

    let globalPic = new Image();
    globalPic.onload = function() {
        document.getElementById(idImage).src = globalPic.src;
    }
    globalPic.src=what.value;
}


function get_data_empresas(){
    return new Promise((resolve,reject)=>{
        axios.post('/lista_empresas',{
            param:0
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

}

function limpiar_datos(){

        document.getElementById('txtCodigo').value='';
        document.getElementById('txtDPI').value='';
        document.getElementById('txtNombre').value='';
        document.getElementById('txtAreaTrabajo').value='';
        document.getElementById('txtSector').value='';
        document.getElementById('cmbTSalud').value='SN';
        document.getElementById('cmbTAlimentacion').value='SN';
        document.getElementById('cmbTPulmones').value='SN';

        document.getElementById('txtFoto1').value = '';
        document.getElementById('txtFoto2').value = '';
        document.getElementById('txtFoto3').value = '';

        document.getElementById('img1').src = './favicon.png';
        document.getElementById('img2').src = './favicon.png';
        document.getElementById('img3').src = './favicon.png';
};


function get_listado(){

    let filtro = document.getElementById('txtFiltrar').value || '';
    if(filtro==''){F.AvisoError('Escriba un codigo o nombre para buscar');return;}
    let container = document.getElementById('tblDataClientes');
    container.innerHTML = GlobalLoader;
    let str = '';


    axios.post('/listado_clientes',{
        filtro:filtro
    })
    .then((response) => {
        let data = response.data;
        if(Number(data.rowsAffected[0])>0){
            data.recordset.map((r)=>{
                str += `
                                <tr>
                                    <td>${r.EMPRESA}</td>
                                    <td>${r.CODIGO}</td>
                                    <td>${r.NOMBRE}</td>
                                    <td>${r.AREA}
                                        <br>
                                        <small>${r.SECTOR}</small>
                                    </td>
                                    <td>${r.SALUD}</td>
                                    <td>${r.ALIMENTOS}</td>
                                    <td>${r.PULMONES}</td>
                                    <td></td>
                                    <td></td>
                                </tr>
                `
            })

            container.innerHTML = str;
        }else{
            container.innerHTML = 'No hay datos...'
        }             
    }, (error) => {
        container.innerHTML = 'No hay datos...'
    });


};



function insert_cliente(){

    

    let codempresa = document.getElementById('cmbEmpresa').value;
    let codigo = document.getElementById('txtCodigo').value;
    let dpi = document.getElementById('txtDPI').value;
    let nombre = document.getElementById('txtNombre').value;
    let fecha = F.devuelveFecha('txtFechaNacimiento');
    let area = document.getElementById('txtAreaTrabajo').value;
    let sector = document.getElementById('txtSector').value;
    let tsalud = document.getElementById('cmbTSalud').value;
    let talimentos = document.getElementById('cmbTAlimentacion').value;
    let tpulmones = document.getElementById('cmbTPulmones').value;
    let f1 = document.getElementById('img1').src;
    let f2 = document.getElementById('img2').src;
    let f3 = document.getElementById('img3').src;


    return new Promise((resolve,reject)=>{
        axios.post('/insert_cliente',{
            codempresa:codempresa,
            codigo:codigo,
            dpi:dpi,
            nombre:nombre,
            fecha:fecha,
            area:area,
            sector:sector,
            tsalud:tsalud,
            talimentos:talimentos,
            tpulmones:tpulmones,
            f1:f1,
            f2:f2,
            f3:f3
        })
        .then((response) => {
            let data = response.data;
            if(Number(data.rowsAffected[0])>0){
                resolve(data); 
            }else{
                reject(); 
            }             
        }, (error) => {
            reject();
        });
    })

}